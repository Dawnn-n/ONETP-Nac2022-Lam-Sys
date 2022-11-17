import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

export default function Homepage(params : {
    admin : boolean,
}){
    return (
        <div id={style['homepage']}>
            <div id={style['map']}>
                <img src="" alt="" />
            </div>
            <div> {/* Please delete this, it would go in the topbar were Celi to commit it */}
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/areas'>Areas</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/users'>Users</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/patients'>Patients</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/vis'>Vis</a>
            </div>
        </div>
    )
}