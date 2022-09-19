import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Badge = styled.View`
  height: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 2px 5px;
`;

export const Card = styled.TouchableOpacity`
  width: 48%;
  border-radius: 8px;
  margin-bottom: 10px;
  justify-content: space-between;
  border-width: 1.5px;
  border-color: ${props => props.theme.colors.secondary};
`;

export const CardHeader = styled.View`
  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.light};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: flex-start;
  align-items: center;
  padding: 20px 15px 0 15px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 125px;
  resizeMode: contain;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.warning};
  align-items: center;
  justify-content: space-around;
  padding-vertical: 5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  margin-vertical: ${props => props.mV || 0}px;
  text-align: ${props => props.align || 'center'};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.colors.white};
  margin-bottom: 15px;
`;