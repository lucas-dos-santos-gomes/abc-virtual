'use client'
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 80vh;
  padding: 10vw;
  flex-direction: ${({ imgLeft }) => imgLeft && "row-reverse"};
  & div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40vw;
    height: 100%;
    padding: 0vw 5vw;
    background-image: radial-gradient( rgba(255, 255, 255, 0.5) 10%, rgba(255, 255, 255, 0) 60%);
  }
`;

export default Section;
