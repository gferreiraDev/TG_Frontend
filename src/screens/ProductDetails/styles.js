import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import Swiper from "react-native-swiper"
import { Ionicons } from '@expo/vector-icons'


export const Box = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'};
  width: ${props => props.width || 100}%;
  height: ${props => props.height? props.height + 'px' : 'auto'};
  border: solid 1.5px #fff;
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

export const Column = styled.View`
  width: ${props => props.width || '50'}%;
  align-items: ${props => props.align || 'flex-start'};
  justify-content: center;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: 22,
  color: '#f48'
})``;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resizeMode: stretch;
`;

export const Input = styled.Text`
  border: solid 1.5px #000;
  border-radius: 5px;
  width: 60px;
  color: #000;
  text-align: center;
  padding-vertical: 5px;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#D48'
})`
  margin-vertical: 25px;
`;

export const Page = styled.View`
  background-color: #eee;
  flex: 1;
  width: 100%;
  border-top-left-radius: 50px;
  padding: 15px;
  margin-top: -40px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: ${props => props.width || 100}%;
  padding-vertical: ${props => props.pV || 0}px;
  padding-horizontal: ${props => props.pH || 0}px;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  margin-bottom: 5px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Swipe = styled(Swiper)`
  height: 270px;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#4ff' : '#cacaca'};
  border-radius: 5px;
  margin-horizontal: 2px;
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
  font-weight: bold;
  color: #000;
  text-align: center;
`;