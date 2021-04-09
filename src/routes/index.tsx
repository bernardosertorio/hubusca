import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/index';
import { UserRepository } from '../pages/UserRepository/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:user" component={UserRepository} />
  </Switch>
);

export default Routes;