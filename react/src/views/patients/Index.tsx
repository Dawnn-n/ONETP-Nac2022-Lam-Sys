import React, { useEffect, useState, } from 'react';
import { child, get, push, ref, set } from "firebase/database";
import style from './style.module.css';
import { db } from '../../firebase';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

export default function Patients(params : {

}){
    const options = (index : number) => <div>
        <IconButton aria-label="edit" size="medium" onClick={() => editPatient(index)}>
            <CreateIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium" onClick={() => deletePatient(index)}>
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>
    const [patients, setPatients] = useState<[{
        name: string,
        birthdate: string,
        vitalSigns: string,
        labValues: string,
        assessments: string,
        areaId: string, // FK
        nurse: string, // Maybe FK to Users
        options: JSX.Element
    }]>()
    const patientsRef = child(ref(db), 'patients')

    function editPatient (index : number) {

    }
    function deletePatient (index : number) {

    }
    function addPatient (data: {
        name: string,
        birthdate: string,
        vitalSigns: string,
        labValues: string,
        assessments: string,
        areaId: string,
        nurse: string,
    }) {

    }

    const [modalOpen, toggleModal] = useState(false)

    return (
        <div className={style["table-container"]}>
            <DataGrid
                rows={patients !== undefined? patients : []}
                columns={[
                    { field: 'name', headerName: 'Patient', width: 100 },
                    { field: 'location', headerName: 'Location', width: 100 },
                    { field: 'nurse', headerName: 'Nurse', width: 100 },
                    { field: 'birthdate', headerName: 'Birthdate', width: 100 },
                    { field: 'vitalSigns', headerName: 'Vital signs', width: 100 },
                    { field: 'labValues', headerName: 'Lab values', width: 100 },
                    { field: 'assessments', headerName: 'Assessments', width: 100 },
                    {
                        field: 'options',
                        headerName: 'Options',
                        type: 'JSX.Element',
                        width: 120
                    },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            <Button
                variant="outlined"
                sx={{
                        marginRight: '-10px',
                        marginBottom: '-10px',
                }}
                onClick={() => toggleModal(true)}
            >
                <AddIcon /> Add
            </Button>
            <Button
                variant="outlined"
                sx={{
                        marginRight: '-10px',
                        marginBottom: '-10px',
                }}
                onClick={() => {/* No way we are doing this*/}}
            >
                <PrintIcon /> Print report
            </Button>
            <Modal
                open={modalOpen}
                onClose={() => toggleModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <TextField label="Name" variant="standard" />
                    <TextField label="Location" variant="standard" />
                    <TextField label="Nurse" variant="standard" />
                    <TextField label="Birthdate" variant="standard" />
                    <TextField label="Vital signs" variant="standard" />
                    <TextField label="Lab values" variant="standard" />
                    <TextField label="Assessments" variant="standard" />
                    <Button variant="outlined" sx={{
                        marginRight: '-10px',
                        marginBottom: '-10px',
                    }}>
                        <AddIcon /> Add
                    </Button>
                    <IconButton aria-label="exit" size="small">
                        <CancelIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            </Modal>
        </div>
    )
}