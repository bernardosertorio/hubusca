import { BrowserRouter as Router } from 'react-router-dom';

import { UserRepositoryProvider } from './hooks/useUserRepository';

import Routes  from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <UserRepositoryProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </UserRepositoryProvider>
  );
};

