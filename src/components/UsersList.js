import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

const UsersList = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const { results: users } = await response.json();
        setList(users);
    };
    useEffect(() => {
        getUsers();
    }, [])

    const onRowClick = (index) => {
        const user = list[index];
        navigate(`/${index}`, { state: user });
    };
    const renderRows = (row, index) => {
        return (<TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={() => onRowClick(index)}
        >
            <TableCell component="th" scope="row">
                {`${row.name.first} ${row.name.last}`}
            </TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.dob.age}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
        </TableRow>)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row, index) => renderRows(row, index))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersList;