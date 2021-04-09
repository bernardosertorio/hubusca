import { Container }  from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <Link to={'/'}><h1>HUBusca</h1></Link>
      <h2>Busque devs no Github</h2>
    </Container>
  )
}