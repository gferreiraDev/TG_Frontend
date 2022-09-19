import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"


export const Body = styled.View`
  padding-vertical: 5px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.mT || 0}px;
`;

export const Button = styled.TouchableOpacity`
  padding-vertical: ${props => props.large ? 5 : 2}px;
  padding-horizontal: ${props => props.large ? 20 : 8}px;
  border-width: 1.5px;
  border-color: ${props => props.delete ? '#F00' : '#80F'};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${props => props.large ? '100%' : 'auto'};
  margin-horizontal: ${props => props.mH || 0}px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  border: solid 1.5px rgba(58, 58, 58, 0.4);
  border-radius: 8px;
  padding: 8px 10px;
  margin: 5px 0;
`;

export const Header = styled.View`
  width: 100%;
  border-bottom-width: 1.5px;
  border-bottom-color: #333;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(Ionicons).attrs(props => ({
  size: 22,
  color: props.delete ? props.theme.colors.danger : props.theme.colors.primary
}))``;

export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-weight: bold;
  font-family: sans-serif;
`;