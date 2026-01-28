import { Button } from 'react-bootstrap';
import { useState } from "react";
import Carrousel from "./Carrousel";
import Cards from "./Cards";

const Main = () => {
  const [incremento, setIncremento] = useState(0);

  const incrementarHandleClick = () => {
    setIncremento(prev => prev + 1);
    console.log('clicou no butão!' + incremento);
  };

  return (
    <main>
      <Carrousel />
      <Cards />

      {incremento}
      <Button onClick={incrementarHandleClick}>Adicionar</Button>
    </main>
  );
}

export default Main;
