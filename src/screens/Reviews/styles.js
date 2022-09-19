import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"


export const Card = styled.View`
  border: solid 1px #333;
  padding: 5px 8px;
  border-radius: 5px;
  width: 100%;
  background-color: #cacaca;
  margin-bottom: 8px;
`;

export const CardHeader = styled.View`
  border-bottom-width: 1.5px;
  border-bottom-color: #333;
  margin-bottom: 5px;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: center;
  justify-content: space-between;
  padding-vertical: 2px;
`;

export const Column = styled.View`
  width: 80%;
  align-items: center;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 15px;
`;

export const Header = styled.View`
  width: 100%;
  background-color: rgba(250, 250, 250, .52);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border: solid 3px #fff;
  border-radius: 5px;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#D48'
})`
  margin-vertical: 25px;
`;

export const Row = styled.View``;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'}
  color: #000;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;