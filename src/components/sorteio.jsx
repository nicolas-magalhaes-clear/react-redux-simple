import Card from './Card'

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

export default function Sorteio(props) {

    const min = useSelector((state) => parseInt(state.number.min))
    const max = useSelector((state) => parseInt(state.number.max))
    
    return (
        <Card title="Sorteio de um número" purple>
            <div className='Intervalo'>
                <span>
                    <span>Resultado:</span>
                    <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
                
                </span>
                
            </div>
        </Card>
    )
}