import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/index';
import { UserProfile } from '../pages/UserProfile/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:user" component={UserProfile} />
  </Switch>
);

export default Routes;