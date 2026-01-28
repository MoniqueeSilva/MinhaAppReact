import { Routes, Route } from "react-router-dom"
import Template from "./components/Template"
import Home from "./components/Home"
import Rodape from "./components/Rodape"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Rodape />} />
      </Route>
    </Routes>
  )
}

export default App;
