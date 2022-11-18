import React, { useEffect, useState, } from 'react';
import style from './style.module.css'
import layout from './layout.png'

export default function Homepage(params : {
    admin : boolean,
}){
    return (
        <div className={style['homepage']}>
            <div className={style['map']}>
                <img src={layout} alt="Hospital layout" />
            </div>
            <div> {/* Please delete this, nav would go in the topbar were Celi to commit it */}
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/areas'>Areas</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/users'>Users</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/patients'>Patients</a>
                <a style={{ width: '100px', height: '100px', background: 'black', color: 'white' }} href='/vis'>Vis</a>
            </div>
        </div>
    )
}