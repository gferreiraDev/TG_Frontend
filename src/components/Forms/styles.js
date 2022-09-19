import styled from "styled-components/native"

export const Area = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  resizeMode: contain;
`;

export const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const AvatarArea = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  border: ${props => `solid 4px ${props.theme.colors.white}`}
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  border: solid 1.5px #333;
  border-color: ${props => props.error ? '#c44' : props.active ? '#F80' : '#333'};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 15px 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  resizeMode: contain;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${props => props.align || 'center'};
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
`;

export const Column = styled.View`
  width: ${props => props.width || 50}%;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  text-align: center;
`;

export const Modal = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: #4a0;
  flex: 1;
  padding: 20px 15px;
`;

export const ModalBox = styled.Modal``;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border: solid 1px #f41;
  border-radius: 8px;
  padding-vertical: 5px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #f41;
`;