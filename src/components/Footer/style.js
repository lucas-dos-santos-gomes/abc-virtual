'use client'

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2d4482;
  padding: 20px 0;
  color: white;
  text-align: center;
  content {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const LinksSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
 `;

export const LinksColumn = styled.div`
  text-align: left;
  margin: 0 10px;
  p {
    margin: 10px 0;
  }
 `;

export const SocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & > * {
    margin: 0 10px;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
`;