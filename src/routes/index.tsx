import React from 'react';
import { Switch } from 'react-router-dom';
import Landing from '../pages/landing';
import Feed from '../pages/Feed'
import Redirection from './redirect';
import Route from './routes';

const Routes: React.FC = (() => {

    return(
        <Switch>
            <Route path="/login/" component={Landing} />
            <Route path="/feed/" component={Feed} isPrivate />
            <Route component={Redirection} />
        </Switch>
    );  
});

export default Routes;