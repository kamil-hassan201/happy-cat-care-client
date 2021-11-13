import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAppointments from '../../ManageAppointments/ManageAppointments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentIcon from '@mui/icons-material/Payment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddService from '../../dashboard/AddService/AddService';
import MyOrders from './MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../shared/PrivateRoute/AdminRoute';
import PrivateRoute from '../../shared/PrivateRoute/PrivateRoute';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const drawerWidth = 260;

function Dashboard(props) {
    const { admin, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {/* Admin links start */}
                {admin ? <>
                    <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/manageappointments`}>
                        <ListItem button >

                            <ListItemIcon>
                                <ManageAccountsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage Appointments" />
                        </ListItem>
                    </NavLink>
                    <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/addservice`}>
                        <ListItem button >

                            <ListItemIcon>
                                <AddCircleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add a Service" />
                        </ListItem>
                    </NavLink>
                    <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to="/">
                        <ListItem button >

                            <ListItemIcon>
                                <MiscellaneousServicesOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage Services" />
                        </ListItem>
                    </NavLink>
                    <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/makeadmin`}>
                        <ListItem button >

                            <ListItemIcon>
                                <AdminPanelSettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Make a Admin" />
                        </ListItem>
                    </NavLink></>
                    :
                    // user link 
                    <><NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/myorders`}>
                        <ListItem button >

                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Appointments" />
                        </ListItem>
                    </NavLink>
                        <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/addreview`}>
                            <ListItem button >

                                <ListItemIcon>
                                    <ReviewsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add a Review" />
                            </ListItem>
                        </NavLink>
                        <NavLink style={{ color: 'inherit', textDecoration: 'none' }} to={`${url}/payment`}>
                            <ListItem button >

                                <ListItemIcon>
                                    <PaymentIcon />
                                </ListItemIcon>
                                <ListItemText primary="Payment" />
                            </ListItem>
                        </NavLink>
                    </>}
                <Button style={{}} sx={{ my: 3, color: 'error.main' }} onClick={logout}>Log Out</Button>
            </List>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar style={{}}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <NavLink style={{ color: 'inherit', textDecoration: 'none', float: 'right', marginLeft: 'auto' }} sx={{ ml: 5 }} to='/'>Go Home</NavLink>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <AdminRoute exact path={`${path}/manageappointments`}>
                        <ManageAppointments></ManageAppointments>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addservice`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route exact path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <h2>Payment system soming soon</h2>
                    </Route>

                </Switch>


            </Box >
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
