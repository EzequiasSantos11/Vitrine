import { ArrowLeft, ArrowRight, Card, Carrocel, Container, ShopCart, Wrapper } from "./styled";
import { Moreviwerlist } from "../../services/apiFake";
import { useContext, useState } from "react";
import { ControllContext } from "../../services/contexts";


export function CarrocelMobile() {
  const [current, setCurrent] = useState(0);
  const {counter, setCounter} = useContext(ControllContext);
  const length = Moreviwerlist.length;
  const nextSlide = ()=>{
    setCurrent(current === length -1 ? 0 : current + 1);
  }
  const prevSlide = ()=>{
    setCurrent(current === 0 ? length -1 : current -1);
  }
  // setTimeout(prevSlide, 1000*8);
  if(!Array.isArray(Moreviwerlist)|| Moreviwerlist.length<=0){
    return null
  }
  return (
    <Container>
      <h2>mobile</h2>
      <div className="wrapper">
        <div className="movieRowLeft" onClick={prevSlide}>
          <ArrowLeft style={{ fontSize: 50 }} />
        </div>
        <div className="movieRowRight" onClick={nextSlide}>
          <ArrowRight style={{ fontSize: 50 }} />
        </div>
        <Wrapper>
          <Carrocel>
            {Moreviwerlist.length > 0 && Moreviwerlist.map((item, index) => (
              <Card key={index}  className={index < current ? "prev" : index === current ? "active" : index > current ? "next" : ""}>
                <img src={item.image} alt="" />
                <ShopCart onClick={()=>setCounter(counter+1)}/>
              </Card>
            ))}
          </Carrocel>
        </Wrapper>
      </div>
    </Container>
  )
}