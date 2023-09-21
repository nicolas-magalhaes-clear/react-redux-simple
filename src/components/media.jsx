import Card from './Card'

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateMin, updateMax } from '../store/actions/numberSlice'

export default function Media(props) {
    

    const min = useSelector((state) => state.number.min)
    const max = useSelector((state) => state.number.max)

    
    return (
        <Card title="Média dos números" green>
            <div className='Intervalo'>
                <span>
                    <span>Resultado:</span>
                    <strong>{ ((parseInt(min)+ parseInt(max)) /2) }</strong>
                    
                </span>
            </div>
        </Card>
    )
}