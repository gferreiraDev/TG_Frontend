import styled from "styled-components"
import { SafeAreaView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export const Area = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 80px;
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
  padding-vertical: ${props => props.large ? 8 : 2}px;
  padding-horizontal: ${props => props.large ? 20 : 8}px;
  border: solid 1.5px #F94A20;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${props => props.large ? '100%' : 'auto'};
  margin-vertical: ${props => props.mV || 0}px;
`;

export const Card = styled.View`
  width: ${props => props.width || 100}%;
  border: solid 1.5px #333;
  border-radius: 8px;
  padding: 8px 10px;
  margin: 15px 0;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => ({
  size: 22,
  color: props.color ? props.color : '#fff'
}))`
`;

export const Image = styled.Image`
  width: 75%;
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

export const Link = styled.TouchableOpacity`
  margin-vertical: 20px;
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
  font-family: sans-serif;
  color: ${props => props.color || '#fff'};
`;