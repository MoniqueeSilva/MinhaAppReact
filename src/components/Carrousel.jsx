import { Carousel, Container, Image } from "react-bootstrap";
import "./style/Carrousel.css";

const Carrousel = () => {
  return (
    <Container>
       <Carousel>
        <Carousel.Item>
          <Image className="imagem-carrossel" src="/src/assets/Carrousel/estudantes.jpg"/>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="imagem-carrossel" src="/src/assets/Carrousel/papel.jpg"/>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="imagem-carrossel" src="/src/assets/Carrousel/quadro.jpg"/>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
