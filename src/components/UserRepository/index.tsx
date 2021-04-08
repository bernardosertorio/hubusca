import { Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import { useUserReporitory } from '../../hooks/useUserRepository';

import { Error } from './styles';

export function UserRepository() {
  const { 
    handleAddUserRepository,
    setNewInputUserName, 
    inputError,  
    userRepository,
    newIpuntUserName, 
  } = useUserReporitory();

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