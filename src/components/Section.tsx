import "./Section.css"
import Perfil from "../assets/Perfil.svg"
import TitleIcon from "../assets/Title-icon.svg"
import Filter from "../assets/icons/Filter.svg"
import Search from "../assets/icons/Search.svg"
import Card from "./Card"

export default function Section() {
  return(
    <section>
      <div className="section-padding">
        <div className="header">
          <h1>Meu Kanban <img className="icon" src={TitleIcon} alt="" /> </h1>
          <img className="Perfil"  src={Perfil} alt="perfil" />
        </div>
        <div className="search">
          <button><img src={Filter} alt="" /> Filtrar</button>
          <input placeholder="Busque por cards, assuntos ou responsáveis..." type="text" />  
          <img className="img-search" src={Search} alt="" />
        </div> 
      <div className="cards">
        <div className="card to-do">
          <h2>A fazer</h2>
          <div className="listing">
            <Card title="#boraCodar um Kanban 🧑‍💻" assunto="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban." tema1="rocketseat" tema2="desafio"/>
            <Card title="Manter a ofensiva 🔥" assunto="Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva" tema1="rocketseat"/>
            <Card title="Almoçar 🥗" assunto="Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço" tema1="autocuidado"/>
          </div>
        </div>
        <div className="card doing">
          <h2>Fazendo</h2>
          <Card title="Conferir o novo desafio 🚀 " assunto="Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível" tema1="rocketseat" tema2="desafio"/>
          <Card title="Ser incrível 😎" assunto="Sempre me lembrar de manter minha autenticidade e espalhar amor" tema1="autocuidado"/>
        </div>
        <div className="card done">
          <h2>Feito</h2>
          <Card title="#boraCodar uma página de login 🧑‍💻" assunto="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban." tema1="rocketseat" tema2="desafio"/>
          <Card title="#boraCodar uma página de clima 🧑‍💻" assunto="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban." tema1="rocketseat" tema2="desafio"/>
          <Card title="#boraCodar um conversor 🧑‍💻" assunto="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban." tema1="rocketseat" tema2="desafio"/>
        </div>
      </div>
      </div>
    </section>
  )
}