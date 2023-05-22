import {AppBar,Toolbar,styled} from '@mui/material'
import {NavLink} from 'react-router-dom';
const Header=styled(AppBar)`
    background-color:#111111
`;
const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
text-decoration:none;
color:white;
`;


const NavBar=()=>
{
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to="/">Home</Tabs>
                <Tabs to="/all">All Users</Tabs>
                <Tabs to="/add">Add Users</Tabs>
            </Toolbar>
        </Header>

    )
}
export default  NavBar;