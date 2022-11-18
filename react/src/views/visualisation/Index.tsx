import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { child, ref } from 'firebase/database';
import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import style from './style.module.css'

export default function Visualisation(params : {

}){
    const [originFilter, setOriginFilter] = useState('')
    const callsRef = child(ref(db), 'calls')
    const [calls, setCalls] = useState<[{
        id: number,
        origin: string,
        urgency: string,
        resolution: string,
        calledAt: Date,
        solvedAt: Date | null,
    }]>()

    const [areaFilter, setAreaFilter] = useState(0)
    const areasRef = child(ref(db), 'areas')
    const [areas, setAreas] = useState<[{
        name: '',
    }]>()

    const [callsFiltered, setCallsFiltered] = useState<[{
        id: number,
        origin: string,
        urgency: string,
        resolution: string,
        calledAt: Date,
        solvedAt: Date | null,
    }]>()

    return (
        <div className={style["vis-root"]}>
            <Box sx={{
                flex: 1,
                display: 'flex',
            }}>

            </Box>
            <Box sx={{
                flex: 1,
                display: 'flex',
            }}>
                <FormControl fullWidth>
                    <InputLabel>Filter by area</InputLabel>
                    <Select
                        value={areaFilter}
                        label="Age"
                        onChange={(e) => {setAreaFilter(e.target.value as number)}}
                    >
                        {areas?.map(e => <MenuItem value={e.name}>
                            {e.name}
                        </MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}