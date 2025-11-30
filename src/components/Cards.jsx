import { Container, Button, Card, Col, Row } from "react-bootstrap";
import rankingIE from "../datasets/instituicoes_pb.json";
import "./style/Cards.css";

import img1 from "../assets/Cards/ifPJ.jpg";
import img2 from "../assets/Cards/CSE.jpg";
import img3 from "../assets/Cards/EManayde.jpg";

const imagens = {
  25096850: img1,
  25133500: img2,
  25139401: img3,
};

const Cards = () => {
  return (
    <Container className="cards-container">
      <Row>
        {rankingIE.map((IEs) => (
          <Col key={IEs.CO_ENTIDADE} md={4} className="mb-4">
            <Card>

              {imagens[IEs.CO_ENTIDADE] && (
                <Card.Img
                  variant="top"
                  src={imagens[IEs.CO_ENTIDADE]}
                  className="imagem-card"
                />
              )}

              <Card.Body>
                <Card.Title>{IEs.NO_ENTIDADE}</Card.Title>
                <Card.Text>
                  Município: {IEs.NO_MUNICIPIO} <br />
                  Total de matrículas: {IEs.TOTAL_MATRICULAS}
                </Card.Text>

                <Button variant="primary">Saber mais</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
