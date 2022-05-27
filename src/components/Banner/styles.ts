import styled, {keyframes} from "styled-components";
import { Icones } from "../Icones";

export const AnimationSlide = keyframes`
  0%{
    opacity: 0;
  }50%{
    opacity: 1;
  }100%{
    opacity: 0;
  }
`;

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
  height: 50vh;
  width: 100%;
  overflow: hidden;
  @media (max-width: 800px) {
    height: 30vh;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  .slide{
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      opacity: 0;
    }
    img{
      position: absolute;
      opacity: 0;
      object-fit: cover;
      transition: all 1s ease-in-out;
    }
  }
  .active{
    display: flex;
    width: 100%;
    flex-shrink: 0;
    h1{
      text-align: center;
      display: inline;
      background: rgba(0,0,0,0.4);
      position: absolute;
      font-size: 3rem;
      color: #FFF;
      z-index: 9999;
      opacity: 1;
      left: 0;
      right: 0;
      transition: all .6s ease-in-out;
    }
    img{
      position: absolute;
      opacity: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      transition: all .4s ease-in-out;
      object-fit: cover;
    }
  }
`;

