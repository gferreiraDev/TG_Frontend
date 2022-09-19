import styled from "styled-components/native"

export const Modal = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  width: 100%;
  margin: 0 15px;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 40%;
  bottom: 40%;
`;

export const Load = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff'
})`
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;