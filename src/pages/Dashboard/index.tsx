import { Header } from '../../components/Header';
import { RepositorySearcher } from '../../components/RepositorySearcher';

import { useReporitorySearcher } from '../../hooks/useRepositorySearcher';

export function Dashboard() {
  const { 
    handleAddUserProfile, 
    inputError, 
    newIpuntUserName, 
    setNewInputUserName, 
    userRepository } = useReporitorySearcher();

  return (
    <> 
      <Header />
      <RepositorySearcher 
        handleAddUserProfile={handleAddUserProfile}
        inputError={inputError}
        newIpuntUserName={newIpuntUserName}
        setNewInputUserName={setNewInputUserName}
        userRepository={userRepository} 
      />
    </>
  )
};