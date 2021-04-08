import { useState, FormEvent } from 'react';
import { Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import { Error } from './styles';

import api from '../../services/api';

interface UserRepositoryProps {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

export function UserRepository() {
  const [newIpuntUserName, setNewInputUserName] = useState('');
  const [userRepository, setUserRepository] = useState<UserRepositoryProps[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleAddUserRepository(event: FormEvent<HTMLFormElement>)
  : Promise<void> {
    event.preventDefault();

    if(!newIpuntUserName) {
      setInputError('Digite o login de um usuário')
      return;
    }

    try {
      const response = await api.get<UserRepositoryProps>
      (`/users/${newIpuntUserName}`);
      const userRepo = response.data;

      setUserRepository([...userRepository, userRepo]);
      setNewInputUserName('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do usuário. Verifique se o login está correto');
    }
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

        { inputError && <Error>{inputError}</Error> }

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