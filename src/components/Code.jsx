import {AppBar,Toolbar,styled} from '@mui/material'
const A=styled('h1')`
    color:blue;
    text-align:center;
    margin-top:100px;
`
const B=styled('h2')`
    color:grey;
    text-align:center;
`
const Code=()=>
{
    return(
        <>
        <A>USER MANAGEMENT SYSTEM</A>
        <B align="center">We are here to maintain all your user data.</B>
        <h3 align="center">User Management is a system for authenticating users and storing user data. Our User Management APIs make managing users of your app easy. These APIs handle your user registration process, user authentication, and password management. We provide a variety of login options including Backendless login, Facebook, Google, Twitter, and OAuth2 integration. Using Backendless Console, you can manage all aspects of your user accounts such as changing user properties, reset passwords, enable or disable users, manage user profiles, and more.</h3>
        </>
    )
}
export default Code;