import {useState} from 'react';
import { FormGroup,FormControl,Input,InputLabel, Typography,styled,Button } from "@mui/material";
import {addUser} from '../service/api'
import {useNavigate} from 'react-router-dom';

const Container=styled(FormGroup)`
width:50%;
margin:auto;
margin-top:8%;
text-align:center;
`;
const C=styled(FormControl)`
margin-top:3%;
`
const defaultVal=
{
    name:'',
    username:'',
    email:'',
    phone:''
}

const Add=()=>
{
    const[user,setUser]=useState(defaultVal);
    
    const navigate=useNavigate();
    
    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }
    const addUserDetails=async()=>
    {
        await addUser(user);
        navigate('/all');
    }
    return(
    <Container>                                            {/*FormGroup*/}
            <Typography variant="h4">Add user:</Typography>
            <C>                                                {/*FormControl*/}
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </C>

            <C>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </C>

            <C>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </C>

            <C>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </C>
            <C>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </C>
        </Container>
    )
}
export default  Add;