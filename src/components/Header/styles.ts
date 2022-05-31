import styled from "styled-components";
import { Icones } from "../Icones";



export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #FFF;
  z-index: 99999;
  h1{
    font-size: 3rem;
    margin-top: 10px;
  }
  .menuIcon{
    display: none;
  }
  .backLog{
    position: fixed;
    background: rgba(0,0,0,0.4);
    height: 100vh;
    width: 100vw;
    top: 4rem;
    left: 0;
    z-index: 998;
  }
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    background: #FFF;
    margin-top: 20px;
    transition: all .4s ease;
    nav{
      display: flex;
      width: 60%;
      justify-content: center;
      align-items: center;
      ul{
        display: flex;
        width: 100%;
        justify-content: space-around;
        li{
          a{
            font-size: 18px;
            margin: 0 10px;
            color: #000;
            &:hover{
              color: blue;
            }
          }
        }
      }
    }
    .user-info{
      display: flex;
      position: relative;
      align-items: center;
      height: 40px;
      gap: 20px;
      .se{
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .search{
        display: flex;
        align-items: center;
        height: 100%;
        input{
          height: 100%;
          padding-left: 30px;
          padding-right: 10px;
          border-radius: 5px;
          border: 1px solid #333;
        }
        button{
          height: 100%;
          border: none;
          margin-left: 5px;
          background: none;
          position: absolute;
          svg{
            font-size: 20px;
          }
        }
      }
      .cart{
        cursor: pointer;
        display: flex;
        position: relative;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          background: blue;
          position: absolute;
          top: -8px;
          right: -8px;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          color: #FFF;
        }
      }
    }
  }
 
  @media (max-width: 976px) {
    .wrapper{
      position: relative;
      .open{
        position: absolute;
        z-index: 99999;
        background: blue;
        height: 83vh;
        width: 100%;
        right: 0;
        top: 60px;
        justify-content: flex-start;
        transition: all .5s ease-in-out;
        ul{
          flex-direction: column;
          height: 70%;
          gap: 20px;
          li{
            display: flex;
            align-items:center;
            background-color: #FFF;
            height: 40%;
            width: 90%;
            margin: 0 auto;
            padding-left: 30px;
            border-radius: 20px;
            a{
              margin: 0;
              padding: 0;
            }
          }
        }
      }
      .close{
        position: absolute;
        z-index: 99999;
        background: blue;
        height: 40px;
        transform: scale(.02);
        right: 0;
        right:  0;
        width: 100%;
        opacity: 0;
        top: 65px;
        justify-content: flex-start;
        align-items: center;
        transition: all .5s ease-in-out;
        ul{
          display: none;
          flex-direction: column;
          li{
            display: flex;
            align-items:center;
            background-color: #FFF;
            height: 40%;
            width: 90%;
            margin: 0 auto;
            padding-left: 30px;
            border-radius: 20px;
            a{
              margin: 0;
              padding: 0;
            }
          }
        }
      }
      .user-info{
        width: 100%;
        justify-content: center;
        .se{
          gap: 20px;
        }
      }
      .menuIcon{
        display: flex;
        cursor: pointer;
      }
    }
  }
   @media (max-width: 424px) {
    .wrapper{
      position: relative;
      .user-info{
        height: 30px;
        gap: 10px;
        .cart{
          span{
            height: 19px;
            width: 19px;
          }
        }
      }
    }
  }
  @media (max-width: 336px){
    .wrapper{
      height: 70px;
      .user-info{
        height: 50px;
        flex-direction: column;
        .se{
          width: 100%;
          justify-content: space-around;
        }
       .search{
          height: 42px;
          button{
            svg{
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
export const ShopCart = styled(Icones.TiShoppingCart)`
  display: flex;
  font-size: 50px;
  @media (max-width: 800px) {
    font-size: 45px;
  }
  @media (max-width: 424px) {
    font-size: 35px;
  }
`;

export const IconUser = styled(Icones.FaUserAlt)`
  display: flex;
  font-size: 35px;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 28px;
  }
  
`;

export const IconMenuClose = styled(Icones.IoMenu)`
  display: flex;
  font-size: 65px;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 60px;
  }
  @media (max-width: 424px) {
    font-size: 45px;
  }
`;

export const SearchIcon = styled(Icones.IoSearch)`
  display: flex;
  font-size: 20px;
  @media (max-width: 424px){
    font-size: 18px;
  }
  @media (max-width: 336px) {
    font-size: 12px;  
  }
`;

