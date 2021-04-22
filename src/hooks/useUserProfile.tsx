import { createContext, ReactNode, useContext, useState } from 'react';

import { editDate } from '../utils/editDate';

import api from '../services/api';

interface IPropsRepositorySearcher {
  children: ReactNode;
}

interface IUser {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  id: number;
  followers: number;
  public_repos: number;
};

interface IUserRepository {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
}

interface ContextUserProfile {
  user: IUser | null;
  userRepository: IUserRepository[];
  loadData: (login: string) => Promise<void>;
}


const UserProfileContext = createContext<ContextUserProfile>(
  {} as ContextUserProfile
);

export function UserProfileProvider({ children }: IPropsRepositorySearcher) {
  const [user, setUser] = useState<IUser | null >(null);
  const [userRepository, setUserRepository] = useState<IUserRepository[]>([]);

  async function loadData(login: string): Promise<void> {
    const user = await api.get(`users/${login}`);
    const repositories = await api.get(`users/${login}/repos`);

    const userRepository = repositories?.data?.map((repo: any) => ({
      ...repo,
      created_at: editDate(repo.created_at),
      pushed_at: editDate(repo.pushed_at),
    }));

    setUser(user.data);
    setUserRepository(userRepository);
  }


  return (
    <UserProfileContext.Provider value={{ user, userRepository, loadData }}>
      {children}
    </UserProfileContext.Provider>  
  )
};

export function useUserProfile() {
  const context = useContext(UserProfileContext);

  return context;
};