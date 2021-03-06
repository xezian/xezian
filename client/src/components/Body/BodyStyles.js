import styled from 'styled-components';
import background from '../../images/background.jpg';

const BodyStyles = styled.div`
  padding: 6vh 0;
  color: ${props => props.theme.textOne};
  min-height: 100vh;
  max-width: 100%;
  background: linear-gradient(
      ${props => props.theme.mainBackground}78,
      ${props => props.theme.mainBackground}78
    ),
    url(${background});
  background-size: cover;
  margin: 0;
  z-index: 0;
  color: ${props => props.color};
  button {
    background-color: ${props => props.backColor};
    z-index: 3;
    &:focus {
      outline: 0;
    }
  }
`;

export default BodyStyles;
