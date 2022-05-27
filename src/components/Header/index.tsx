import { Container, ShopCart, Money, SearchIcon, IconUser } from "./styles";


export function Header() {
  return (
    <Container>
      <Money />
      <form className="search">
        <input type="text" placeholder="Digite aqui sua pesquisa!" />
        <button type="submit" >
          <SearchIcon />
        </button>
      </form>
      <div className="shopcart">
        <div className="user">
          <IconUser />
          <span>Minha conta</span>
        </div>
        <div className="cart">
          <ShopCart />
          <span>4</span>
        </div>
      </div>
    </Container>
  )
}