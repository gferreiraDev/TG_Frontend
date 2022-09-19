import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  padding: 10px;
  border: solid 1px #F70;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: flex-start;
  padding: 20px 15px 0 15px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => ({
  size: 22,
  color: props.color ? props.color : '#fff'
}))`
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#fff'};
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color || '#fff'};
  margin-vertical: 15px;
`;