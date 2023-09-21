import './Card.css'




export default function Card(props){

    function getColor(props){
        if(props.red) return 'Red'
        if(props.green) return 'Green'
        if(props.blue) return 'Blue'
        if(props.purple) return 'Purple'
        return ""
    }
    let selectedColor = getColor(props)

    return(
        <div className={`Card ${selectedColor}`}>
            <div className='Header'>
                 <span className='Title'>{props.title}</span>
            </div>
            <div className='Content'>
                 {props.children}
            </div>
        </div>
    )
}