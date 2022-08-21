import styled from "styled-components"
import { FontAwesome } from "@expo/vector-icons"
import * as Progress from "react-native-progress"


export const Area = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const Badge = styled.TouchableOpacity`
  padding: 5px 5px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px 16px;
  border: solid 1px #000;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #F48;
`;

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  border: solid 1.5px #333;
  border-color: ${props => props.error ? '#c44' : props.active ? '#F80' : '#333'};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 15px 0;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px 15px 15px 15px;
  background-color: #130224;
`;

export const Icon = styled(FontAwesome).attrs(props => ({
  size: 22,
  color: props.color ? props.color : '#fff'
}))`
`;

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  resizeMode: contain;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: #fff;
`;

export const InputArea = styled.View`
  width: ${props => props.width || 100}%;
  padding: 8px 10px;
  border: solid 1.5px #333;
  border-radius: 8px;
  margin-vertical: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
  
export const Link = styled.TouchableOpacity`
  margin-vertical: 20px;
  align-items: center;
`;

export const ProgressBar = styled(Progress.Bar).attrs({
})`
  margin: 10px 0;
  width: 100%;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-between'};
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  boder: solid 1px #f70;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.error ? '#C44' : '#fff'};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  text-align: center;
`;