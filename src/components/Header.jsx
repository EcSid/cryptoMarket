import { useReducer, useEffect } from 'react'
import logo from '/public/invest.svg'
import { reducerTime } from '../reducers'

export default function Header({username = undefined}) {
    const [stateTime, dispatch] = useReducer(reducerTime, {time: new Date()});

    useEffect(() => { 
        const interval = setInterval(() => dispatch({ type: 'newTime' }), 1000)
        return () => {
            clearInterval(interval)}
    }, [])

    return (
        <header>
            <div className='logo'>
                <img src={logo} width="40px" height='40px'></img>
                <h3 style={{marginLeft: '18px'}}>Crypto Market</h3>
            </div>
            <p className='logo'>{`Время сейчас: ${stateTime.time.toLocaleTimeString()}`}</p>
        </header>
    )
}