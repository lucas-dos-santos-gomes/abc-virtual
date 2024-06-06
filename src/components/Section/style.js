'use client'
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 80vh;
  flex-direction: ${({ imgLeft }) => imgLeft ?? "row-reverse"};
`;

export default Section;
