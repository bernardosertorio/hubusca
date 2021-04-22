import { FormEvent } from 'react';
import { RepositoryStyles } from './styles';
import { FiChevronRight, FiGlobe, FiX} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

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
  deleteUserRepository(login: string): Promise<void>; 
  inputError: string;
  repository: IUserRepository;  
  userRepository: IUserRepository[];
  newIpuntUserName: string;    
}

export function RepositorySearcher({ 
  handleAddUserProfile, 
  inputError, 
  newIpuntUserName, 
  setNewInputUserName,
  deleteUserRepository, 
  repository
}: IRepositorySearcherProps) {

  const handleDeleteUserRepository = () => {
    deleteUserRepository(repository.login)
  }

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

          <Link key={repository.login} to={`/users/${repository.login}`}>

            <button 
              type="button" 
              className="delete-container"
              onClick={handleDeleteUserRepository}
            >
              <FiX size={15}/>
            </button>

            <img 
              src={repository.avatar_url} 
              alt={repository.login}
            />

            <div>
              <strong>Nome</strong>
              <p>{repository.name}</p> 
            </div>

            <div>
              <strong>Login</strong>
              <p>{repository.login}</p> 
            </div>

            <div>
              <strong>Localização</strong>
              <p>{repository.location}</p> 
            </div>
            <FiChevronRight size={20} /> 
          </Link>
      </RepositoryStyles>
    </>
  );
};