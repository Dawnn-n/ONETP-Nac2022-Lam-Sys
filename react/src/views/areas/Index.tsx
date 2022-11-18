import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { child, ref } from 'firebase/database';
import React, { useEffect, useState, } from 'react';
import { db } from '../../firebase';
import style from './style.module.css'
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Areas(params : {
    admin : boolean,
}){
    const options = (index : number) => <div>
        <IconButton aria-label="edit" size="medium" onClick={() => editArea(index)}>
            <CreateIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium" onClick={() => deleteArea(index)}>
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>
    const [areas, setAreas] = useState<[{
        name: string,
    }]>()
    const areasRef = child(ref(db), 'areas')

    function editArea (index : number) {

    }
    function deleteArea (index : number) {

    }
    function addArea (data: {
        name: string,
    }) {

    }

    const [modalOpen, toggleModal] = useState(false)

    return (
        <div className={style["table-container"]}>
            <DataGrid
                rows={areas !== undefined? areas : []}
                columns={[
                    { field: 'name', headerName: 'Area', width: 70 },
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