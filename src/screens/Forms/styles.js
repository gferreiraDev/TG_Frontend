import styled from "styled-components"
import { SafeAreaView } from "react-native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
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
  font-family: sans-serif;
  color: ${props => props.color || '#fff'};
  margin-vertical: 25px;
`;