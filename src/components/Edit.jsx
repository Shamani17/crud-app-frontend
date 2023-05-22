import {useState,useEffect} from 'react';
import { FormGroup,FormControl,Input,InputLabel, Typography,styled,Button } from "@mui/material";
import {editUser,getUser} from '../service/api'
import {useNavigate,useParams} from 'react-router-dom';

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

const Edit=()=>
{
    const[user,setUser]=useState(defaultVal);
    
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>
    {
        loadUserDetails();
    },[])

    const loadUserDetails=async()=>
    {
        const response=await getUser(id);
        setUser(response.data);
    }

    const onValueChange=(e)=>{
        //console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        //console.log(user);
    }
    const editUserDetails=async()=>
    {
        await editUser(user,id);
        navigate('/all');
    }
    return(
    <Container>                                            {/*FormGroup*/}
            <Typography variant="h4">Edit user:</Typography>
            <C>                                                {/*FormControl*/}
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </C>

            <C>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </C>

            <C>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </C>

            <C>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </C>
            <C>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </C>
        </Container>
    )
}
export default  Edit;