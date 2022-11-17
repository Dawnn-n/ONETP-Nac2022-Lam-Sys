import { child, ref } from 'firebase/database';
import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import style from './style.module.css'

export default function Visualisation(params : {

}){
    const [areas, setAreas] = useState<[{
        name: '',
    }]>()
    const areasRef = child(ref(db), 'areas')

    function editAreas (index : number) {

    }
    function deleteAreas (index : number) {

    }

    return (
        <div>
            <table>
                <thead>
                    <th>Area</th>
                    <th><i>Options</i></th>
                </thead>
                {areas?.map(e => <tr>
                    <td>{e.name}</td>
                    <td>
                        <div id={style['edit']} onClick={() => editAreas(areas.indexOf(e))} />
                        <div id={style['delete']} onClick={() => deleteAreas(areas.indexOf(e))} />
                    </td>
                </tr>)}
            </table>
        </div>
    )
}