import { useContext, useState } from "react";
import { ControllContext } from "../../services/contexts";
import { Container, ShopCart,  SearchIcon, IconUser, IconMenuClose } from "./styles";

type PropsHeader={
  fixed: boolean;
}

export function Header({fixed}: PropsHeader) {
  const [openMenu, setOpenMenu] = useState(false);
  const {counter} = useContext(ControllContext);
  return (
    <Container style={{position: fixed? "fixed":"initial", top: fixed ? '0': '50px'}}>
      <h1>Vitrine</h1>
      <div className="wrapper">
        <nav className={openMenu ? "open":"close"}>
          <ul>
            <li><a href="">Roupas</a></li>
            <li><a href="">Fitness</a></li>
            <li><a href="">Pijamas e Lingerie</a></li>
            <li><a href="">Moda Praia</a></li>
            <li><a href="">Jóias &amp; Acessórios</a></li>
          </ul>
        </nav>
        <div className="user-info">
          <form className="search">
            <input type="text" placeholder="Pesquisar..." />
            <button type="submit" >
              <SearchIcon />
            </button>
          </form>
          <div className="se">
            <IconUser />
            <div className="cart">
              <ShopCart />
              {counter > 0 ? (<span>{counter}</span>):""}
            </div>
            <div className="menuIcon" onClick={()=>setOpenMenu(!openMenu)}>
              <IconMenuClose/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}