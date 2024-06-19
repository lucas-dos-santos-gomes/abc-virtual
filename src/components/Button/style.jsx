'use client'

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
