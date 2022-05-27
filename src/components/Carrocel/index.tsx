import { ArrowLeft, ArrowRight, Card, Carrocel, Container, Wrapper } from "./styles";
import { Moreviwerlist } from "../../services/apiFake";
import { useState } from "react";


export function CarrocelComponent() {
  const [scrollX, setScrollX] = useState(-400);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = Moreviwerlist.length * 380;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }
  return (
    
    <Container>
      <h2>Mais vistos</h2>
      <div className="wrapper">
        <div className="movieRowLeft" onClick={handleLeftArrow}>
          <ArrowLeft style={{ fontSize: 50 }} />
        </div>
        <div className="movieRowRight" onClick={handleRightArrow}>
          <ArrowRight style={{ fontSize: 50 }} />
        </div>
        <Wrapper>
          <Carrocel style={{
            marginLeft: scrollX,
            width: Moreviwerlist.length * 380
          }}>
            {Moreviwerlist.length > 0 && Moreviwerlist.map((item, key) => (
              <Card key={key} className="movieRow--item">
                <img src={item.image} alt="" />
              </Card>
            ))}
          </Carrocel>
        </Wrapper>
      </div>
    </Container>
  )
}