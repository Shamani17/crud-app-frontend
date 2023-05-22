import {useEffect,useState} from 'react';
import { Table,TableBody, TableCell, TableHead, TableRow,styled,Button } from "@mui/material";
import {getUsers,deleteUser} from '../service/api.js'; 
import {Link} from 'react-router-dom';

const A=styled(Table)`
    width:95%;
    margin:50px auto 0 auto;
`;
const TH=styled(TableRow)`
    background:#000000;
    &>th
    {
        color:white;
    }
`
const TB=styled(TableRow)`
    &>td
    {
        font-size:20px;
    }
`;
const All=()=>
{
    const[users,setUsers]=useState([]);
    useEffect(()=>
    {
        getAllUsers();
    },[]);

    const getAllUsers=async()=>
    {
        let response=await getUsers();
        setUsers(response.data);
    }
    const deleteUserDetails=async(id)=>
        {
            await deleteUser(id);
            getAllUsers();
        }
    return(
        <A>
            <TableHead>
                <TH>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TH>    
            </TableHead>
            <TableBody>
                {
                    users.map(user=>
                        (
                            <TB key={user._id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{marginRight:10}}color="secondary" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="warning" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TB>
                        ))
                }
            </TableBody>
        </A>
    )
}
export default All;