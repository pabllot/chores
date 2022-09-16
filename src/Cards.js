import React, { useState } from 'react'
import { tasks } from './chores'
import pablo from './images/pablo.png'
import lucas from './images/lucas.png'
import nilo from './images/nilo.png'


import './styles.css';


const one = 
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

const two =     

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

const three =     

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

const Cards = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(one)


    
     
    const handleSubmit = (event) => {
        event.preventDefault()
        switch(value) {
            case '1':
            case '4':
            case '7':
            case '10':
            case '13':
            case '16':
            case '19':
            case '22':
            case '25':
            case '28':
            case '31':
                setShow(one);
                break
            case '2':
            case '5':
            case '8':
            case '11':
            case '14':
            case '17':
            case '20':
            case '23':
            case '26':
            case '29':
                setShow(two)
                break
            case '3':
            case '6':
            case '9':
            case '12':
            case '15':
            case '18':
            case '21':
            case '24':
            case '27':
            case '30':
                setShow(three)
                break
        }
    }


    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }


    return (
    <>    
    <form className='form'>
        <label>
            <input className='input' type="string" name="name" onChange={handleChange} />
        </label>
        <input type="submit" className='button' value="Digite o número" onClick={handleSubmit} />
    </form>
    <div>{show}</div>
    </>
  )
}

export default Cards