import styled from "styled-components"
import { FontAwesome } from "@expo/vector-icons"
import { TextInputMask } from "react-native-masked-text"


export const Area = styled.View`
  width: ${props => props.width || 100}%;
  padding: 5px 10px;
  border-width: 1.5px;
  border-color: ${props => props.error ? '#c44' : '#333'};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 5px 5px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Container = styled.View`
  width: ${props => props.width || 100}%;
  margin-bottom: 8px;
`;

export const Icon = styled(FontAwesome).attrs(props => ({
  size: 22,
  color: props.error ? '#c44' : '#fff'
}))`
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: ${props => props.error ? '#c44' : '#fff'};
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.error ? '#c44' : '#fff'};
  text-align: left;
`;

export const MaskedInput = styled(TextInputMask).attrs({
  placeholderTextColor: '#fff',
})`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: ${props => props.error ? '#c44' : '#fff'};
`;