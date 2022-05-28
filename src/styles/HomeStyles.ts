import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Midware = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 100%;
  background:#0F1112;
  color: #FFF;
  margin-top: 40px;
  margin-bottom: 20rem;
  gap: 20px;
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    strong{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #FFF;
      padding: 10px;
      margin-right: 10px;
      border-radius: 50%;
      svg{
        font-size: 40px;
      }
    }
    span{
      width: 50%;
      text-transform: uppercase;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    .item{
      margin: 0;
      margin: 20px auto;
    }
  }
`;