import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';

import Login from './components/Login';
import EventList from './components/EventList';
import EventAdd from './components/EventAdd';
import EventEdit from './components/EventEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="login" hideNavBar>
          <Scene key="login" component={Login} title="Login" initial />
        </Scene>

        <Scene key="main">  
          <Scene 
            key="eventList" 
            rightTitle="Add Event"
            onRight={() => Actions.eventAdd()}
            component={EventList} 
            title="Event" 
            initial 
          />
          <Scene
            key="eventAdd"
            component={EventAdd}
            title="Add New Event"
          />
          <Scene
            key="eventEdit"
            component={EventEdit}
            title="Edit Event"
          />
        </Scene>
      </Stack>
    </Router>  
  );
};

export default RouterComponent;
