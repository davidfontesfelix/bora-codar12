import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import "./AsideBar.css"
import Tablet from "../assets/icons/Tablet.svg"
import Peoples from "../assets/icons/Peoples.svg"
import Document from "../assets/icons/Document.svg"
import Cog from "../assets/icons/Cog.svg"

interface AsideProps{
  children: any
}

export default function AsideBar(props: AsideProps) {
  return(
    <div className="content">
      <aside>
        <div className="aside-padding">
          <img src={Logo} alt="" />
          <ul>
            <li>
              <Link className="link active" to="/">
                <img src={Tablet} alt="" />
                <h4>Boards</h4>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <img src={Peoples} alt="" />
                <h4>Equipes</h4>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <img src={Document} alt="" />
                <h4>Relatórios</h4>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <img src={Cog} alt="" />
                <h4>Ajustes</h4>
              </Link>
            </li>
          </ul>
        </div> 
      </aside>
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}