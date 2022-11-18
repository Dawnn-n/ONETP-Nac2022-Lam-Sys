import React, { useEffect, useState, } from 'react';
import { child, ref, set } from "firebase/database";
import { db } from "../../firebase"
import style from './style.module.css'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Users(params : {
    admin : boolean,
}){
    const options = (index : number) => <div>
        <IconButton aria-label="delete" size="medium" onClick={() => deleteUser(index)}>
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>
    const [users, setUsers] = useState<[{
        name: '',
        email: '',
        role: '',
        options: JSX.Element
    }]>()
    const usersRef = child(ref(db), 'users')

    function deleteUser (index : number) {

    }

    return (
        <div className={style["table-container"]}>
            <DataGrid
                rows={users !== undefined? users : []}
                columns={[
                    { field: 'name', headerName: 'User', width: 70 },
                    { field: 'email', headerName: 'E-Mail', width: 70 },
                    { field: 'role', headerName: 'Role', width: 70 },
                    {
                        field: 'options',
                        headerName: 'Options',
                        type: 'JSX.Element',
                        width: 70
                    },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}