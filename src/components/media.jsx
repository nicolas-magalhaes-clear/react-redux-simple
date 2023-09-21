import Card from './Card'

import React from 'react'
export default function Media(props) {

    const min = props.min;
    const max =props.max;
    return (
        <Card title="Média dos números" green>
            <div className='Intervalo'>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min+max)/2}</strong>
                    
                </span>
            </div>
        </Card>
    )
}