import Card from './Card'

import React from 'react'
export default function Sorteio(props) {
    const min = props.min;
    const max =props.max;
    return (
        <Card title="Sorteio de um número" purple>
            <div className='Intervalo'>
                <span>
                    <span>Resultado</span>
                    <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
                
                </span>
                
            </div>
        </Card>
    )
}