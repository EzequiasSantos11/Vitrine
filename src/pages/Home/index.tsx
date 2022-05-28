import { Icones } from "../../components/Icones";
import { Banner } from "../../components/Banner";
import { CarrocelComponent } from "../../components/Carrocel";
import { CarrocelMobile } from "../../components/CarrocelMobile";
import { Container, Midware } from "../../styles/HomeStyles";



export default function Home(){
  const width = window.innerWidth;
  console.log(width)
  return(
    <Container>
      <Banner/>
      <>
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
      </>
      <Midware className="infoLoja">
        <div className="item payForms">
          <strong>
            <Icones.FaMoneyCheck/>
          </strong>
         <span>Pague em até 12 vezes</span>
        </div>
        <div className="item clientsSatisfaction">
          <strong>
            <Icones.HiUserGroup/>
          </strong>
          <span>Mais de 20 mil clientes</span>
        </div>
        <div className="item buy">
          <strong>
            <Icones.ImCart/>
          </strong>
          <span>Compre online e retire na loja física</span>
        </div>
      </Midware>
    </Container>
  );
}