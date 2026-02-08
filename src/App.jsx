import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Template from "./layouts/Template"
import Home from "./views/Home"
import Instituicoes from "./views/Instituicoes"
import Estudante from "./views/Estudante"
import BotaoTema from "./components/Tema"
import "./components/style/Tema.css"

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <div className={temaEscuro ? "dark" : "light"}>
      <BotaoTema temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />

      <h1>Minha aplicação</h1>

      <Routes> //declaração dos endereços das páginas
        <Route path="/" element={<Template />}> //usar o tamplate como estrutura
          <Route index element={<Home />} /> //página padrão das rotas
          <Route path ="instituicoes" element={<Instituicoes />}></Route> //rota para nova página
          <Route path="estudantes/:estudante_id" element={<Estudante />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;