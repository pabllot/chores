import React, { useState } from 'react'
import { tasks } from './chores'
import pablo from './images/pablo.png'
import lucas from './images/lucas.png'
import nilo from './images/nilo.png'
import faxina from './images/faxina.png'


import './styles.css';


export const one = 
<main className='container'>

        <section>
            <div className='text'>{tasks[0].chore}</div>
            <img src={lucas}></img>
        </section>

        <section>
            <div className='text'>{tasks[1].chore}</div>
            <img src={pablo}></img>
        </section>

        <section>
            <div className='text'>{tasks[2].chore}</div>
            <img src={nilo}></img>
        </section>

    </main>


export const two =   
<main className='container'>

    <section>
        <div className='text'>{tasks[1].chore}</div>
        <img src={lucas}></img>
    </section>

    <section>
        <div className='text'>{tasks[2].chore}</div>
        <img src={pablo}></img>
    </section>

    <section>
        <div className='text'>{tasks[0].chore}</div>
        <img src={nilo}></img>
    </section>

</main>


export const three =    
<main className='container'>

    <section>
        <div className='text'>{tasks[2].chore}</div>
        <img src={lucas}></img>
    </section>

    <section>
        <div className='text'>{tasks[0].chore}</div>
        <img src={pablo}></img>
    </section>

    <section>
        <div className='text'>{tasks[1].chore}</div>
        <img src={nilo}></img>
    </section>

</main>


export const wrongNumber =
<div className='alternative'>
    <div className='text'>Digite apenas o dia que você está procurando...</div>
</div> 

export const home = 
<div className='alternativo'>
    <img className='zero' src={faxina}></img>
</div>


