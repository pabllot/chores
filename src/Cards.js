import React, { useState } from 'react'
import { tasks } from './chores'
import red from './images/red.jpg'
import blue from './images/blue.jpg'
import black from './images/black.jpg'

import './styles.css';


const one = 
<main className='container'>

        <section>
            <div className='text'>aqui vai o {tasks[0].name}</div>
            <div className='text'>fazer: {tasks[0].chore}</div>
            <img src={red}></img>
        </section>

        <section>
            <div className='text'>aqui vai o {tasks[1].name}</div>
            <div className='text'>fazer: {tasks[1].chore}</div>
            <img src={blue}></img>
        </section>

        <section>
            <div className='text'>aqui vai o {tasks[2].name}</div>
            <div className='text'>fazer: {tasks[2].chore}</div>
            <img src={black}></img>
        </section>

    </main>

const two =     

<main className='container'>

    <section>
        <div>aqui vai o {tasks[0].name}</div>
        <div>fazer: {tasks[1].chore}</div>
        <img src={red}></img>
    </section>

    <section>
        <div>aqui vai o {tasks[1].name}</div>
        <div>fazer: {tasks[2].chore}</div>
        <img src={blue}></img>
    </section>

    <section>
        <div>aqui vai o {tasks[2].name}</div>
        <div>fazer: {tasks[0].chore}</div>
        <img src={black}></img>
    </section>

</main>

const three =     

<main className='container'>

<section>
    <div>aqui vai o {tasks[0].name}</div>
    <div>fazer: {tasks[2].chore}</div>
    <img src={red}></img>
</section>

<section>
    <div>aqui vai o {tasks[1].name}</div>
    <div>fazer: {tasks[0].chore}</div>
    <img src={blue}></img>
</section>

<section>
    <div>aqui vai o {tasks[2].name}</div>
    <div>fazer: {tasks[1].chore}</div>
    <img src={black}></img>
</section>

</main>


let value
const Cards = () => {
    const [valor, setValor] = useState('d')

    return (
    <>
    <input />
    <button className='button'>DIGITE O DIA</button>
    <div>{one}</div>
    </>
  )
}

export default Cards