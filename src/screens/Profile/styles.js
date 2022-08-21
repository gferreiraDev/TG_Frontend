import styled from "styled-components"
import { SafeAreaView } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Area = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 5px;
  width: 100%;
  margin-top: -60px;
`;

export const Badge = styled.View`
  padding: 5px 5px;
  background-color: #F94A20;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

export const Box = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'};
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

export const Card = styled.View`
  width: 100%;
  border: solid 1.5px rgba(58, 58, 58, 0.4);
  border-radius: 8px;
  padding: 8px 10px;
  margin: 5px 0;
`;

export const CardBody = styled.View`
  padding-vertical: 5px;
`;

export const CardHeader = styled.View`
  width: 100%;
  border-bottom-width: 1.5px;
  border-bottom-color: #333;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ClickArea = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border-width: 4px;
  border-color: #f70;
  background-color: #fff
  margin-right: 20px;
`;

export const Column = styled.View`
  width: ${props => props.width || '50%'};
  align-items: ${props => props.align || 'flex-start'};
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => ({
  size: 22,
  color: props.delete ? '#F00' : '#80F'
}))`
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resizeMode: stretch;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1.5px;
  border-bottom-color: #000;
`;

export const List = styled.FlatList``;

export const Loader = styled.ActivityIndicator`
  margin-vertical: 40%;
`;

export const Page = styled.View`
  background-color: #fff;
  flex: 1;
  width: 100%;
  border-top-left-radius: 60px;
  margin-top: 120px;
  padding: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: ${props => props.width || 100}%;
  padding-vertical: ${props => props.pV || 0}px;
  padding-horizontal: ${props => props.pH || 0}px;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 13 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#000'};
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #C49;
  font-weight: bold;
  font-family: sans-serif;
`;

export const MapArea = styled.View`
  width: 100%;
  height: 180px;
  background-color: #888;
`;