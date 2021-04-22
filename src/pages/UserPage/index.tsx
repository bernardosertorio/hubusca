import { Header } from '../../components/Header';
import { UserProfile } from '../../components/UserProfile';

import { useUserProfile } from '../../hooks/useUserProfile';

export function UserPage() {
  const { loadData, user, userRepository } = useUserProfile();
    return ( 
      <>
        <Header />
        <UserProfile 
          loadData={loadData} 
          user={user} 
          userRepository={userRepository} 
        />
      </>
    )
};