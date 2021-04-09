import { RepositoryStyles } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useReporitorySearcher } from '../../hooks/useRepositorySearcher';

import { Error } from './styles';

export function RepositorySearcher() {
  const { 
    handleAddUserProfile,
    setNewInputUserName, 
    inputError,  
    userRepository,
    newIpuntUserName, 
  } = useReporitorySearcher();

  return ( 
    <>
      <RepositoryStyles>
        <form onSubmit={handleAddUserProfile}>
          <input 
            value={newIpuntUserName}
            onChange={(e) => setNewInputUserName(e.target.value)}
            placeholder="Digite o nome do usuário" />
          <button type="submit">Pesquisar</button>
        </form>

        { inputError && <Error>{inputError}</Error> }

        {userRepository.map(user => (
          <Link key={user.login} to={`/users/${user.name}`}>
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