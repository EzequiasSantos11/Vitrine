import { Banner } from "../../components/Banner";
import { CarrocelComponent } from "../../components/Carrocel";
import { CarrocelMobile } from "../../components/CarrocelMobile";



export default function Home(){
  const width = window.innerWidth;
  console.log(width)
  return(
    <div>
      <Banner/>
      {width <= 800 ? (
         <>
         <CarrocelMobile/>
         <CarrocelMobile/>
       </>
      ):(
        <>
          <CarrocelComponent/>
          <CarrocelComponent/>
        </>
       
      )}
     
    </div>
  );
}