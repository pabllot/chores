import React, { useState } from 'react'
import { one, two, three, wrongNumber, home } from './Cards'

const Main = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(home)    
     
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
            default:
                setShow(wrongNumber)
        }
    }


    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }


    return (
    <div className='wrapper'>    
    <form className='form'>
        <label>
            <input className='input' type="string" name="name" onChange={handleChange} />
        </label>
        <input type="submit" className='button' value="Digite o número" onClick={handleSubmit} />
    </form>
    <div>{show}</div>
    </div>
  )
}

export default Main