'use client'

import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  width: 20vw;
  background: #d9d9d9;
  div {
    background: #283D7D;
    color: #d9d9d9;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 16px 0;
`;

export const Price = styled.p`
  font-size: 20px;
  /* color: #d9d9d9; */
  margin: 8px 0;
`;

export default Card;