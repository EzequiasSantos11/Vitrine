import styled from "styled-components";
import { Icones } from "../Icones";



export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #333;
  img{
    height: 80%;
  }
  .search{
    display: flex;
    height: 100%;
    width: 60%;
    &:hover{
      button{
        background: #333;
        color: white;
        transition: all .4s ease-in-out;
      }
    }
    input{
      height: 100%;
      width: 100%;
      font-size: 22px;
      padding: 0 20px;
      border: none;
      border-left: 1px solid #333;
      font-weight: 300;
      font-style: italic;
      text-transform: uppercase;
    }
    button{
      border: none;
      cursor: pointer;
      padding: 0 10px;
      border-right: 1px solid #333;
      background: transparent;
      transition: all .4s ease-in-out;
    }
  }
  .shopcart{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    .user{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 400;
      margin-right: 5px;
      cursor: pointer;
    }
    .cart{
      position: relative;
      cursor: pointer;
      span{
        display: inline-flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: blue;
        color: #FFF;
        font-weight: 800;
        top: -2px;
        right: -8px;
      }
    }
  }
  @media (max-width: 800px) {
    height: 50px;
    position: relative;
    justify-content: space-between;
    img{
      display: none;
    }
    .search{
      width: 80%;
      input{ 
        font-size: 14px;
      }
      button{
        background: #333;
        svg{
          font-size: 18px;
          color: #FFF;
        }
      }
    }
    .shopcart{
      .cart{
        display: none;
      }
      .user{
        margin: 0;
        justify-content: center;
        span{
          font-size: 12px;
        }
      }
    }
  }
`;
export const ShopCart = styled(Icones.TiShoppingCart)`
  display: flex;
  font-size: 60px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
export const Money = styled(Icones.FaMoneyCheckAlt)`
  display: flex;
  font-size: 60px;
  width: 20%;
  @media (max-width: 800px) {
    font-size: 18px;
    display: none;
  }
`;
export const SearchIcon = styled(Icones.IoSearch)`
  display: flex;
  font-size: 50px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
export const IconUser = styled(Icones.FaUserAlt)`
  display: flex;
  font-size: 35px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;