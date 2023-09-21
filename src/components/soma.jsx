import Card from './Card'

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

export default function Soma(props) {

    const min = useSelector((state) => parseInt(state.number.min))
    const max = useSelector((state) => parseInt(state.number.max))

    return (
        <Card title="Soma de números" blue>
            <div className='Intervalo'>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
               
                </span>
               
            </div>
        </Card>
    )
}