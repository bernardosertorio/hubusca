import { BrowserRouter as Router } from 'react-router-dom';

import { RepositorySearcherProvider } from './hooks/useRepositorySearcher';

import Routes  from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <RepositorySearcherProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </RepositorySearcherProvider>
  );
};

