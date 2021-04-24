import { RepositoryStyles } from './styles';
import { FiChevronRight, FiX} from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface IUserRepository {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
};

interface IRepositorySearcherProps {
  deleteUserRepository(login: string): Promise<void>; 
  repository: IUserRepository;      
}

export function RepositorySearcher({ 
  deleteUserRepository, 
  repository
}: IRepositorySearcherProps) {

  const handleDeleteUserRepository = () => {
    deleteUserRepository(repository.login)
  }

  return (
    <> 
      <RepositoryStyles>
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