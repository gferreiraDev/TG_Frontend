import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

export const Box = styled.View`
  border-width: 1px;
  border-color: ${props => props.theme.colors.gray};
  padding: 4px 25px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  padding-vertical: ${props => props.large ? 8 : 4}px;
  padding-horizontal: ${props => props.large ? 20 : 8}px;
  border-width: 1.5px;
  border-color: ${props => props.border ? props.theme.colors[props.border] : 'transparent'};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${props => props.large ? '100%' : 'auto'};
  margin-horizontal: ${props => props.mH || 0}px;
  background-color: ${props => props.color ? props.theme.colors[props.color] : 'transparent'}
`;

export const Card = styled.View`
  width: ${props => props.width || 100}%;
  border-width: 1.5px;
  border-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: ${props => props.theme.colors.white};
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.5px;
  border-bottom-color:${props => props.theme.colors.gray};
  margin-bottom: 5px;
`;

export const Column = styled.View`
  width: 75%;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Icon = styled(Ionicons).attrs(props => ({
  size: 20,
  color: props.color ? props.theme.colors[props.color] : props.theme.colors.white
}))`
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border-width: 3px;
  border-color: ${props => props.theme.colors.gray};
  resizeMode: contain;
  margin-right: 10px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-around'};
  align-items: center;
  width: 100%;
  padding-vertical: ${props => props.pV || 0}px;
  margin-bottom: ${props => props.mB || 0}px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.border ? props.theme.colors.light : 'transparent' };
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  font-size: ${props => props.large ? 20: 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black };
`;

export const Loader = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.theme.colors.warning
}))`
  margin-vertical: 25px;
`;