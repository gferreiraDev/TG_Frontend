import styled from "styled-components"
import { SafeAreaView } from "react-native-safe-area-context"
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

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  border: solid 1.5px #333;
  border-radius: 8px;
  padding: 8px 10px;
  margin: 8px 0;
  background-color: #fff;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.5px;
  border-bottom-color: #333;
  margin-bottom: 5px;
`;

export const Column = styled.View`
  width: 75%;
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
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border-width: 3px;
  border-color: #000;
  resizeMode: contain;
  margin-right: 10px;
`;

export const Link = styled.TouchableOpacity`
  margin-vertical: 20px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000'};
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color || '#fff'};
`;