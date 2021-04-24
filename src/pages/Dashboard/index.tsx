import { Header } from '../../components/Header';
import { FormSearcher } from '../../components/FormSearcher';
import { RepositorySearcher } from '../../components/RepositorySearcher';

import { useReporitorySearcher } from '../../hooks/useRepositorySearcher';

export function Dashboard() {
  const { 
    handleAddUserProfile, 
    inputError, 
    newIpuntUserName, 
    setNewInputUserName, 
    userRepository, 
  } = useReporitorySearcher();

  return (
    <> 
      <Header />
      <FormSearcher
       handleAddUserProfile={handleAddUserProfile}
       inputError={inputError}
       newIpuntUserName={newIpuntUserName}
       setNewInputUserName={setNewInputUserName}
      />
      {userRepository.map(repository => (
        <RepositorySearcher 
          repository={repository}
        />
      ))}
    </>
  )
}