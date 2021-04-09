import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/index';
import { UserPage } from '../pages/UserPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:user" component={UserPage} />
  </Switch>
);

export default Routes;