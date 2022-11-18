import { FormControl, InputLabel, Select, MenuItem, Box, Paper, Accordion } from '@mui/material';
import { child, ref } from 'firebase/database';
import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import Chart from 'chart.js/auto';
import style from './style.module.css';

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

    const chartElement = <canvas id="chart" />
    return (
        <div className={style["vis-root"]}>
            <Paper sx={{
                flex: 1,
                display: 'flex',
                background: '#7ad6'
            }}>
                {chartElement}
            </Paper>
            <Box sx={{
                flex: 1,
                display: 'flex',
            }}>
                <FormControl fullWidth>
                    <Accordion>
                        <InputLabel>Filter by area</InputLabel>
                        <Select
                            value={areaFilter}
                            label="Age"
                            onChange={(e) => {setAreaFilter(e.target.value as number)}}
                            sx={{
                                marginTop: '10vw',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '40vw',
                            }}
                        >
                            {areas?.map(e => <MenuItem value={e.name}>
                                {e.name}
                            </MenuItem>)}
                        </Select>
                    </Accordion>
                    <Accordion>
                        <InputLabel>Filter by origin</InputLabel>
                        
                    </Accordion>
                </FormControl>
            </Box>
        </div>
    )
}