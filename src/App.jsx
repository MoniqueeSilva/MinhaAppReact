import { Routes, Route } from "react-router-dom"
import Template from "./layouts/Template"
import Home from "./views/Home"
import Instituicoes from "./views/Instituicoes"

function App() {
  return (
      <Routes> //declaração dos endereços das páginas
        <Route path="/" element={<Template />}> //usar o tamplate como estrutura
          <Route index element={<Home />} /> //página padrão das rotas
          <Route path ="instituicoes" element={<Instituicoes />}></Route> //rota para nova página
        </Route>
      </Routes>
  )
}

export default App;