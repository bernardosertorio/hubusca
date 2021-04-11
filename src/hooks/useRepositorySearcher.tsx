import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useState, FormEvent } from 'react';

import api from '../services/api';

interface PropsRepositorySearcher {
  children: ReactNode;
}

interface UserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

interface ContextDataRepositorySearcher {
  newIpuntUserName: string;
  userRepository: UserRepository[];
  inputError: string;
  setNewInputUserName: React.Dispatch<React.SetStateAction<string>>;
  handleAddUserProfile: (event: FormEvent<HTMLFormElement>) => Promise<void>; 
}


const RepositorySearcherContext = createContext<ContextDataRepositorySearcher>(
  {} as ContextDataRepositorySearcher
);

export function RepositorySearcherProvider({ children }: PropsRepositorySearcher) {
  const [newIpuntUserName, setNewInputUserName] = useState('');
  const [inputError, setInputError] = useState('');

  const [userRepository, setUserRepository] = useState<UserRepository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@HUBusca:userRepository',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@HUBusca:userRepository',
      JSON.stringify(userRepository),
    );
  }, [userRepository]);

  async function handleAddUserProfile(event: FormEvent<HTMLFormElement>)
  : Promise<void> {
    if(!newIpuntUserName) {
      setInputError('Digite o nome de um usuário')
      return;
    }

    try {
      const response = await api.get<UserRepository>
      (`/users/${newIpuntUserName}`);

      const userRepo = response.data;

      setUserRepository([...userRepository, userRepo]);
      setNewInputUserName('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do usuário. Verifique se o nome está correto');
    }
  };

  return (
    <RepositorySearcherContext.Provider value={{ 
      userRepository, 
      newIpuntUserName, 
      inputError, 
      setNewInputUserName, 
      handleAddUserProfile,  
    }}>
      {children}
    </RepositorySearcherContext.Provider>  
  )
};

export function useReporitorySearcher() {
  const context = useContext(RepositorySearcherContext);

  return context;
};