import { BrowserRouter as Router } from 'react-router-dom';

import { RepositorySearcherProvider } from './hooks/useRepositorySearcher';
import { UserProfileProvider } from './hooks/useUserProfile';

import Routes  from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <RepositorySearcherProvider>  
      <Router>
        <UserProfileProvider>
          <Routes />
        </UserProfileProvider> 
      </Router>
      <GlobalStyle />
    </RepositorySearcherProvider>
  );
};

