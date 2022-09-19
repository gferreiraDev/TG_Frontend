import styled from "styled-components/native"
import { SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"


export const Area = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 80px;
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

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
`;

export const Icon = styled(Ionicons).attrs(props => ({
  size: 22,
  color: props.color ? props.color : '#fff'
}))`
`;

export const Link = styled.TouchableOpacity`
  margin-vertical: 20px;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 13 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;