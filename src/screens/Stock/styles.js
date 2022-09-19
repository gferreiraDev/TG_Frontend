import styled from "styled-components/native"
import { SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"


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
  padding-vertical: 12px;
  padding-horizontal: 15px;
  border: ${props => `solid 1.5px ${props.theme.colors.accent}`};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  border-radius: 8px;
  padding: 8px 10px;
  margin: 8px 0;
  background-color: ${props => props.theme.colors.white};
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.gray};
  margin-bottom: 5px;
`;

export const Column = styled.View`
  width: 75%;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: flex-start;
  align-items: center;
  padding: 20px 15px 0 15px;
`;

export const Icon = styled(Ionicons).attrs(props => ({
  size: 22,
  color: props.color ? props.theme.colors[props.color] : props.theme.colors.accent
}))`
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border-width: 3px;
  resizeMode: contain;
  margin-right: 10px;
`;

export const Link = styled.TouchableOpacity`
  margin-vertical: 20px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 15px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  margin-vertical: 15px;
`;