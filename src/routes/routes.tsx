import React, { useContext } from 'react';
import { Route as ReactRouter, RouteProps as ReactRouteProps, Redirect } from 'react-router-dom';
import AuthContext from '../hooks/useAuth';

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest}) => {
    const {user} = useContext(AuthContext);
    
    return(
        <ReactRouter
            {...rest}
            render={({location}) => {
                return isPrivate === !!user
                    ? (
                        <Component />
                )   :   (
                        <Redirect
                            to={{
                                pathname: isPrivate ? '/login/' : '/feed/',
                                state: { from: location }
                            }}
                        />
                );
            }}
        />
    )
};

export default Route;