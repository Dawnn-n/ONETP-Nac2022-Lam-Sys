import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { child, ref, set } from "firebase/database";
import { db } from "../../firebase"
import style from './style.module.css'

export default function Users(params : {

}){
    const [users, setUsers] = useState<[{
        name: '',
        email: '',
        role: '',
    }]>()
    const usersRef = child(ref(db), 'users')

    function editUser (index : number) {

    }
    function deleteUser (index : number) {

    }

    return (
        <div>
            <table>
                <thead>
                    <th>User</th>
                    <th>E-Mail</th>
                    <th>Role</th>
                    <th><i>Options</i></th>
                </thead>
                {users?.map(e => <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>
                        <div id={style['edit']} onClick={() => editUser(users.indexOf(e))} />
                        <div id={style['delete']} onClick={() => deleteUser(users.indexOf(e))} />
                    </td>
                </tr>)}
            </table>
        </div>
    )
}