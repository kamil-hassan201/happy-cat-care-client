import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    console.log("in admin route", user?.email);
    console.log("loading: ", isLoading, "admin", admin);
    if (isLoading || !admin) {
        return (
            <Box sx={{ width: 600, height: 800 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        );
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default AdminRoute;