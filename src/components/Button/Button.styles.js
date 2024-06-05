import styled, { css } from 'styled-components';

// Definimos um objeto de estilos para tamanhos diferentes do botão.
const sizeStyles = {
  // Estilos para o botão pequeno.
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  `,
  // Estilos para o botão médio.
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  // Estilos para o botão grande.
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
  `,
};

// Definimos o componente StyledButton com styled-components.
// Utilizamos props para definir as cores e o tamanho do botão.
export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor}; // Cor de fundo do botão.
  color: ${({ color }) => color}; // Cor do texto do botão.
  border: none; // Remove a borda padrão.
  border-radius: 100px; // Adiciona bordas arredondadas.
  cursor: pointer; // Muda o cursor para uma mãozinha ao passar o mouse sobre o botão.

  // Aplica os estilos de tamanho com base na prop size.
  ${({ size }) => sizeStyles[size]};
`;
