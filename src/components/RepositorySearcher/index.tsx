import { FormEvent } from 'react';
import { RepositoryStyles } from './styles';
import { FiChevronRight, FiGlobe } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import closeIcon from '../../assets/x.svg';

import Input from '../Input';

import { Error } from './styles';

interface IUserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

interface IRepositorySearcherProps {
  handleAddUserProfile: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setNewInputUserName: React.Dispatch<React.SetStateAction<string>>; 
  inputError: string;  
  userRepository: IUserRepository[];
  newIpuntUserName: string;    
}

export function RepositorySearcher({ 
  handleAddUserProfile, 
  inputError, 
  newIpuntUserName, 
  setNewInputUserName, 
  userRepository}: IRepositorySearcherProps) {

  return ( 
    <>
      <RepositoryStyles>
        <Form onSubmit={handleAddUserProfile}>
          <Input 
            name="typedLogin"
            icon={FiGlobe}
            value={newIpuntUserName}
            onChange={(e) => setNewInputUserName(e.target.value)}
            placeholder="Digite o login do usuário" />
          <button type="submit">Pesquisar</button>
        </Form>

        { inputError && <Error>{inputError}</Error> }

        {userRepository.map(user => (
          <Link key={user.login} to={`/users/${user.login}`}>
            <button 
              type="button" 
              className="delete-container" 
              >
              <img src={closeIcon} alt="Excluir contaienr" />
            </button>
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
          </Link>
        ))}
      </RepositoryStyles>
    </>
  );
};