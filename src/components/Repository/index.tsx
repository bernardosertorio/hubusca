import { Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

export function Repository() {
  return ( 
      <Repositories>
         <form>
          <input placeholder="Digite o nome do usuário" />
          <button type="submit">Pesquisar</button>
        </form>
        
        <a href="test">
          <img 
            src="https://avatars.githubusercontent.com/u/59669475?v=4" 
            alt="Bernardo Sertório"
          />

          <div>
            <strong>Nome</strong>
            <p>Bernardo</p> 
          </div>

          <div>
            <strong>Login</strong>
            <p>Sertório</p> 
          </div>

          <div>
            <strong>Localização</strong>
            <p>Rio de Janeiro</p> 
          </div>
          <FiChevronRight size={20} /> 
        </a>
      </Repositories>
  )
};