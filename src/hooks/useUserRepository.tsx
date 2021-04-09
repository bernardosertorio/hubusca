import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useState, FormEvent } from 'react';

import api from '../services/api';

interface PropsUserRepository {
  children: ReactNode;
}

interface UserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

interface ContextDataUserRepository {
  newIpuntUserName: string;
  userRepository: UserRepository[];
  inputError: string;
  setNewInputUserName: React.Dispatch<React.SetStateAction<string>>;
  handleAddUserRepository: (event: FormEvent<HTMLFormElement>) => Promise<void>; 
}


const UserRepositoryContext = createContext<ContextDataUserRepository>(
  {} as ContextDataUserRepository
);

export function UserRepositoryProvider({ children }: PropsUserRepository) {
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

  async function handleAddUserRepository(event: FormEvent<HTMLFormElement>)
  : Promise<void> {
    event.preventDefault();

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
    <UserRepositoryContext.Provider value={{ 
      userRepository, 
      newIpuntUserName, 
      inputError, 
      setNewInputUserName, 
      handleAddUserRepository,  
    }}>
      {children}
    </UserRepositoryContext.Provider>  
  )
};

export function useUserReporitory() {
  const context = useContext(UserRepositoryContext);

  return context;
};