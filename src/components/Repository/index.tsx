import { useState, FormEvent } from 'react';
import { Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

interface UserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

export function Repository() {
  const [newIpuntUserName, setNewInputUserName] = useState('');
  const [userRepository, setUserRepository] = useState<UserRepository[]>([]);

  async function handleAddUserRepository(event: FormEvent<HTMLFormElement>)
  : Promise<void> {
    event.preventDefault();

    const response = await api.get<UserRepository>(`/users/${newIpuntUserName}`);
    const userRepo = response.data;

    setUserRepository([...userRepository, userRepo]);
    setNewInputUserName('');
  };

  return ( 
    <>
      <Repositories>
        <form onSubmit={handleAddUserRepository}>
          <input 
            value={newIpuntUserName}
            onChange={(e) => setNewInputUserName(e.target.value)}
            placeholder="Digite o login do usuário" />
          <button type="submit">Pesquisar</button>
        </form>

        {userRepository.map(user => (
          <a key={user.login} href="test">
          <img 
            src={user.avatar_url} 
            alt={user.login}
          />

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
          <FiChevronRight size={20} /> 
        </a>
        ))}
      </Repositories>
    </>
  );
};