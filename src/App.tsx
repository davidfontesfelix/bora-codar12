import AsideBar from "./components/AsideBar";
import "./App.css"
import Section from "./components/Section";

export default function App() {
  return (
    <div className="App">
      <AsideBar>
        <Section/>
      </AsideBar>
    </div>
  )
}
