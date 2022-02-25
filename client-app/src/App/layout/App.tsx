import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../Features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import ActivityForm from '../../Features/activities/form/ActivityForm';
import HomePage from '../../Features/home/HomePage';
import ActivityDetails from '../../Features/activities/details/ActivityDetails';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/activities' component={ActivityDashboard} />
        <Route path='/activities/:id' component={ActivityDetails} />
        <Route path={['/createActivity','/manage/:id']} component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
