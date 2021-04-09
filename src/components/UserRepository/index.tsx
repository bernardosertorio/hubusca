import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { UserRepositoryInfo, RepositoriesList } from './styles'; 

interface UserParams {
  user: string;
}

export function UserRepository() {
    const { params } = useRouteMatch<UserParams>();
    
    return ( 
      <>
        <UserRepositoryInfo>
          <header>
            <img src="https://avatars.githubusercontent.com/u/59669475?v=4" alt="Bernardo"/>
            <div>
              <strong>Nome</strong>
              <p>Bernardo</p>
            </div>
            <div>
              <strong>Login</strong>
              <p>bernardosertorio</p>
            </div>
            <div>
              <strong>Localização</strong>
              <p>Rio de Janeiro</p>
            </div>
            <div>
              <strong>Id</strong>
              <p>12345</p>
            </div>    
          </header>
          <ul>
            <li>
              <strong>60</strong>
              <span>Segidores</span>
            </li>
            <li>
              <strong>25</strong>
              <span>Repositórios</span>
            </li>
          </ul>    
        </UserRepositoryInfo>

        <RepositoriesList>
          <Link to="/">
              <div>
                <strong>Repositório</strong>
                <p>GoRestaurant</p> 
              </div>

              <div>
                <strong>Linguagem</strong>
                <p>Typescript</p> 
              </div>

              <div>
                <strong>Descrição</strong>
                <p>Projeto feito no curso Ignite</p> 
              </div>

              <div>
                <strong>Criação</strong>
                <p>22/03/2021</p> 
              </div>

              <div>
                <strong>Último push</strong>
                <p>21/02/2021</p> 
              </div>
              <FiChevronRight size={20} /> 
            </Link>
        </RepositoriesList>

      </>
    )
};