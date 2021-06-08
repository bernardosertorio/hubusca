import { createContext, ReactNode, useContext, useEffect, useState, FormEvent } from 'react';

import api from '../services/api';

interface IPropsRepositorySearcher {
  children: ReactNode;
}

interface IUserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

interface ContextDataRepositorySearcher {
  newIpuntUserLogin: string;
  userRepository: IUserRepository[];
  inputError: string;
  setNewInputUserLogin: React.Dispatch<React.SetStateAction<string>>;
  handleAddUserProfile: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}


const RepositorySearcherContext = createContext<ContextDataRepositorySearcher>(
  {} as ContextDataRepositorySearcher
);

export function RepositorySearcherProvider({ children }: IPropsRepositorySearcher) {
  const [newIpuntUserLogin, setNewInputUserLogin] = useState('');
  const [inputError, setInputError] = useState('');

  const [userRepository, setUserRepository] = useState<IUserRepository[]>(() => {
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
    if(!newIpuntUserLogin) {
      setInputError('Digite o nome de um usuário')
      return;
    }

    if (userRepository.find(user => user.login === newIpuntUserLogin)) {
      setInputError('Usuário já encontrado!')
      return;
    }

    try {
      const response = await api.get<IUserRepository>
      (`/users/${newIpuntUserLogin}`);

      const userRepo = response.data;

      setUserRepository([...userRepository, userRepo]);
      setNewInputUserLogin('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do usuário. Verifique se o nome está correto');
    }
  };

  return (
    <RepositorySearcherContext.Provider value={{ 
      userRepository, 
      newIpuntUserLogin, 
      inputError, 
      setNewInputUserLogin, 
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