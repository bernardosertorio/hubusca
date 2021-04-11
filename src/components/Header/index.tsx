import { Container }  from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <Link to={'/'}><FiArrowLeft size={20}/> <h1>HUBusca</h1></Link>
      <h2>Busque devs no Github</h2>
    </Container>
  )
}