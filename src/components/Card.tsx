import './Card.css'

interface CardProps{
  title: string
  assunto: string
  tema1: string
  tema2?: string
}

export default function Card(props: CardProps) {
  function tema2Validator(){
    if(!props.tema2){
      return ''
    } else {
      return(
        <li>{props.tema2}</li>
      )
    }
  }
  return(
  <div className="card-component">
    <div className='margin-card'>
      <h3>{props.title}</h3>
      <p>{props.assunto}</p>
      <ul>
        <li>{props.tema1}</li>
        {tema2Validator()}
      </ul>
    </div>
  </div>
  )
}