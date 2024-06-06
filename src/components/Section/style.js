'use client'
import styled, { css } from "styled-components";

const leftElement = {
  img: css`
    flex-direction: column;
  `,
  text: css`
    flex-direction: row;
  `
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100vw;
  height: 80vh
  ${({ left }) => console.log(leftElement[left])};
`;

export default Section;
