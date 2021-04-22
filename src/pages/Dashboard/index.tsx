import { Header } from '../../components/Header';
import { RepositorySearcher } from '../../components/RepositorySearcher';

import { useReporitorySearcher } from '../../hooks/useRepositorySearcher';

export function Dashboard() {
  const { 
    handleAddUserProfile, 
    inputError, 
    newIpuntUserName, 
    setNewInputUserName, 
    userRepository,
    deleteUserRepository 
  } = useReporitorySearcher();

  return (
    <> 
      <Header />
      {userRepository.map(repository => (
        <RepositorySearcher 
          repository={repository}
          handleAddUserProfile={handleAddUserProfile}
          deleteUserRepository={deleteUserRepository}
          inputError={inputError}
          newIpuntUserName={newIpuntUserName}
          setNewInputUserName={setNewInputUserName}
          userRepository={userRepository} 
        />
      ))}
    </>
  )
}