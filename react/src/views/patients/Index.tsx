import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { child, get, push, ref, set } from "firebase/database";
import style from './style.module.css';
import { db } from '../../firebase';

export default function Patients(params : {

}){
    const [patients, setPatients] = useState<[{
        name: '',
        birthdate: '',
        vitalSigns: '',
        labValues: '',
        assessments: '',
        areaId: 0,
        nurse: '',
    }]>()
    const patientsRef = child(ref(db), 'patients')
    set(push(patientsRef), {
        name: '',
        birthdate: '',
        vitalSigns: '',
        labValues: '',
        assessments: '',
        areaId: 0,
        nurse: '',
    })

    function editPatient (index : number) {

    }
    function deletePatient (index : number) {

    }

    return (
        <div>
            <table>
                <thead>
                    <th>Patient</th>
                    <th>Location</th>
                    <th>Nurse</th>
                    <th>Birthdate</th>
                    <th>Vital signs</th>
                    <th>Lab values</th>
                    <th>Assessments</th>
                    <th><i>Options</i></th>
                </thead>
                {patients?.map(e => <tr>
                    <td>{e.name}</td>
                    <td>{e.areaId}</td> {/* something something foreign key */}
                    <td>{e.nurse}</td>
                    <td>{e.birthdate}</td>
                    <td>{e.vitalSigns}</td>
                    <td>{e.labValues}</td>
                    <td>{e.assessments}</td>
                    <td>
                        <div id={style['edit']} onClick={() => editPatient(patients.indexOf(e))} />
                        <div id={style['delete']} onClick={() => deletePatient(patients.indexOf(e))} />
                    </td>
                </tr>)}
            </table>
        </div>
    )
}