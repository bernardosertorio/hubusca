import { useRouteMatch } from 'react-router-dom';

interface UserParams {
  user: string;
}

export function UserRepository() {
  const { params } = useRouteMatch<UserParams>();
  return <h1>Repository:{params.user}</h1>
};