import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

export function Dashboard() {
  return (
    <> 
      <h1>HUBusca</h1>
      <Title>Busque repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img 
            src="https://avatars.githubusercontent.com/u/59669475?v=4" 
            alt="Bernardo Sertório"
          />
          <div>
            <strong>goRestaurant</strong>
            <p>Exercício Ignite</p> 
          </div>
          <FiChevronRight size={20} /> 
        </a>
      </Repositories>
    </>
  )
};