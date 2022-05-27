import { Container, Card} from "./styles";
import {SlideBanner} from "../../services/apiFake";
import { useState } from "react";

export function Banner(){
  const [current, setCurrent] = useState(0);
  const length = SlideBanner.length;
  // const nextSlide = ()=>{
  //   setCurrent(current === length -1 ? 0 : current + 1);
  // }
  const prevSlide = ()=>{
    setCurrent(current === 0 ? length -1 : current -1);
  }
  setTimeout(prevSlide, 1000*8);
  if(!Array.isArray(SlideBanner)|| SlideBanner.length<=0){
    return null
  }
  return(
    <Container>
      <Card>
        {SlideBanner.map((slide, index)=>(
          <div key={index} className={index === current ? "slide active" : "slide"}>
            <img src={slide.image} alt="" />
          </div>
        ))}
      </Card>
    </Container>
  )
}