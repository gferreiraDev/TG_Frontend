import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialCommunityIcons } from "@expo/vector-icons"

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

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  padding: 10px;
  border: ${props => `solid 1.5px ${props.theme.colors.warning}`};
  border-radius: 8px;
  justify-content: flex-start;
  margin-vertical: 4px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-horizontal: 10px;
  margin-bottom: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: flex-start;
  padding: 20px 15px 0 15px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => ({
  size: 22,
  color: props.color ? props.theme.colors[props.color] : props.theme.colors.white
}))`
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  resizeMode: stretch;
  margin-right: 15px;
`;

export const List = styled.FlatList``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  max-width: 80%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  margin-vertical: 15px;
`;