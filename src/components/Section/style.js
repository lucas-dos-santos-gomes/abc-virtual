'use client'
import styled, { css } from "styled-components";

export const SectionStyled = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ imgLeft }) => imgLeft ? css`row-reversed` : css`row`};
`;
