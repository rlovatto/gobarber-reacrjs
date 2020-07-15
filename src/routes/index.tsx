import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    // Switch assures that only one route is displayed at a time. Otherwise all the routes that match the query would be presented
    <Switch>
      {/* in the first route always put the keyword exact to assure, because react-router-dom consider path to include its value. So, without "exact" when you try to navigate to repository page, the systems would always send you to dashboad page */}

        <Route path='/' exact component={Dashboard} />
        {/* the plus sign below, means that everything after /repository is part of the route parameter */}
        <Route path='/repository/:repository+' component={Repository} />

    </Switch>
)

export default Routes;
