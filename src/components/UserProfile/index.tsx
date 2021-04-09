import { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { UserRepositoryInfo, RepositoriesList } from './styles';

import api from '../../services/api';

interface UserParams {
  user: string;
}

interface User {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  id: number;
  followers: number;
  public_repos: number;
};

interface UserRepository {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
}

export function UserProfile() {
  const [user, setUser] = useState<User | null >(null);
  const [userRepository, setUserRepository] = useState<UserRepository[]>([]);

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.user}`).then(response => {
      setUser(response.data);
    });

    api.get(`users/${params.user}/repos`).then(response => {
      setUserRepository(response.data);
    });
  }, [params.user]);
  
  return ( 
    <>
    {user && (
      <UserRepositoryInfo>
        <header>
          <img src={user.avatar_url} alt={user.login}/>
          <div>
            <strong>Nome</strong>
            <p>{user.name}</p>
          </div>
          <div>
            <strong>Login</strong>
            <p>{user.login}</p>
          </div>
          <div>
            <strong>Localização</strong>
            <p>{user.location}</p>
          </div>
          <div>
            <strong>Id</strong>
            <p>{user.id}</p>
          </div>    
        </header>
        <ul>
          <li>
            <strong>{user.followers}</strong>
            <span>Segidores</span>
          </li>
          <li>
            <strong>{user.public_repos}</strong>
            <span>Repositórios</span>
          </li>
        </ul>    
      </UserRepositoryInfo>
    )}
      
      <RepositoriesList>
        {userRepository.map(repository => (
          <a key={repository.id} href={repository.html_url}>
            <div>
              <strong>Repositório</strong>
              <p>{repository.name}</p> 
            </div>

            <div>
              <strong>Linguagem</strong>
              <p>{repository.language}</p> 
            </div>

            <div>
              <strong>Descrição</strong>
              <p>{repository.description}</p> 
            </div>

            <div>
              <strong>Criação</strong>
              <p>{repository.created_at}</p> 
            </div>

            <div>
              <strong>Último push</strong>
              <p>{repository.pushed_at}</p> 
            </div>
            <FiChevronRight size={20} /> 
          </a>
        ))}
      </RepositoriesList>

    </>
    )
};