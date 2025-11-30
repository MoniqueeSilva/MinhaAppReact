import { Carousel, Image } from "react-bootstrap";
import "./style/Carrousel.css";

const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <Carousel>
        <Carousel.Item interval={2000}>
          <Image
            className="imagem-carrossel"
            src="/src/assets/estudante.jpg"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Image
            className="imagem-carrossel"
            src="/src/assets/grupoEstudando.jpg"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Image
            className="imagem-carrossel"
            src="/src/assets/livros.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
