'use client'

import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  background: #d9d9d9;
  div {
    background: #283D7D;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 16px 0;
`;

export const Price = styled.p`
  font-size: 20px;
  color: #0070f3;
  margin: 8px 0;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #333;
`;

export default Card;