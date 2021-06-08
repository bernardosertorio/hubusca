import { Header } from '../../components/Header';
import { FormSearcher } from '../../components/FormSearcher';
import { RepositorySearcher } from '../../components/RepositorySearcher';

import { useReporitorySearcher } from '../../hooks/useRepositorySearcher';

export function Dashboard() {
  const { 
    handleAddUserProfile, 
    inputError, 
    newIpuntUserLogin, 
    setNewInputUserLogin, 
    userRepository, 
  } = useReporitorySearcher();

  return (
    <> 
      <Header />
      <FormSearcher
       handleAddUserProfile={handleAddUserProfile}
       inputError={inputError}
       newIpuntUserLogin={newIpuntUserLogin}
       setNewInputUserLogin={setNewInputUserLogin}
      />
      {userRepository.map(repository => (
        <RepositorySearcher 
          repository={repository}
        />
      ))}
    </>
  )
}