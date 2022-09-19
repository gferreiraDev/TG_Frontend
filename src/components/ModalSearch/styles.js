import styled from "styled-components/native"

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border-width: 3px;
  resizeMode: contain;
  margin-right: 10px;
`;

export const Box = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secondary};
  flex: 1;
  padding: 20px 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border: ${props => `solid 1px ${props.theme.colors.accent}`};
  border-radius: 8px;
  padding-vertical: 8px;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.View`
  width: ${props => props.width || 50}%;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.accent};
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Modal = styled.Modal``;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-between'};
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 13 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#fff'};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
`;