import Card from './Card'

import React from 'react'
export default function Soma(props) {
    const {min, max} = props
    return (
        <Card title="Soma de números" blue>
            <div className='Intervalo'>
                <span>
                    <span>Resultado</span>
                    <strong>{ min + max}</strong>
               
                </span>
               
            </div>
        </Card>
    )
}