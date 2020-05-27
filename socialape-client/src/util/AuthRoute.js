import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const AuthRoute = ({ componet: Componet, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated === true ? <Redirect to='/'/> : <Componet {...props}/>
        }
    />
);

export default AuthRoute;
