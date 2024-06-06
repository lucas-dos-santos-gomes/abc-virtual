'use client'

// import styled from "styled-components";

// const Button = styled.button`
//   background-color: #91329A;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 100px;
//   cursor: pointer;
//   box-shadow: rgba(46, 46, 46, 0.5) 0px 5px 0px 0px;
// `;

// export default Button;

import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

export default function Button({ children, color, bgColor, size, ...props }) {
  return (
    <StyledButton color={color} bgColor={bgColor} size={size} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  color: 'white',
  bgColor: 'blue',
  size: 'medium',
};
