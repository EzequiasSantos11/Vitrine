import styled from "styled-components";
import { Icones } from "../Icones";


export const ArrowLeft = styled(Icones.IoIosArrowDropleft)`
  color: #fff;
  font-size: 60px;
  cursor: pointer;
`;
export const ArrowRight = styled(Icones.IoIosArrowDropright)`
  color: #fff;
  font-size: 60px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  h2{
    font-size: 3rem;
    text-align: center;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 95%;
    position: relative;
    margin: 0 auto;
    margin-bottom: 30px;
    h2{
      margin: 0;
      font-size: 2rem;
      margin-left: 30px;
    }
    &:hover{
      .movieRowLeft, .movieRowRight{
        opacity: 1;
        transition: all .5s;
      }
    }
    .movieRowLeft, .movieRowRight{
      position: absolute;
      width: 40px;
      height: 90%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      opacity: 0;
      transition: all .5s;
    }
    .movieRowLeft{
      left: 0;
    }
    .movieRowRight{
      right: 0;
    }
    @media(max-width: 760px) {
      .movieRowLeft, .movieRowRight{
        opacity: 1;
      }
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  height: 100%;
  /* margin: 0 200px; */
  width: 100%;
`;
export const Carrocel = styled.div`
  transition: all ease 0.5s;
  display: flex;
  align-items: center;
  height: 100%;
  padding:0 30px;
  @media (max-width: 800px){
    padding: 0;
  }
`;
export const Card = styled.div`
  display: flex;
  align-self: center;
  width: 380px;
  height: 100%;
  flex-shrink: 0;
  img{
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(.9);
    &:hover{
     transform: scale(1);
     transition: all ease .2s;
     cursor: pointer;
    }
  }
  @media (max-width: 800px){
    gap: 10px;
    img{
      transform: scale(1);
    }
  }
`;
 
