'use client'

import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display:flex;
  flex-direction: column;
  background: #d9d9d9;
  transition: transform 0.3s ease;
  div {
    background: #283D7D;
    color: #d9d9d9;
    border-radius: 10px 10px 0px 0px;
  }
  &:hover {
    transform: scale(1.1) translateY(-10%);
  }
  .img {
    margin: 10px 0;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 16px 0;
`;

export const Price = styled.p`
  font-size: 20px;
  margin: 8px 0;
`;

export default Card;