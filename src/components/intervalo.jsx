import Card from './Card'
import './intervalo.css'
import React from 'react'
export default function Intervalo(props) {
    const min = props.min;
    const max = props.max;
    return (
        <Card title="Intervalo de números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min}  onChange={(e)=> props.onMinChanged(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max}  onChange={(e)=> props.onMaxChanged(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}