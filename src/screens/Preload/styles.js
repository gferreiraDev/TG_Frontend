import styled from "styled-components/native"
import { SafeAreaView } from "react-native"
import { ImageBackground } from "react-native";

export const Area = styled.View`
  width: 100%;
`;

export const Background = styled(ImageBackground)`
  flex: 1;
  padding-vertical: ${props => props.pV || 0}px;
  padding-horizontal: ${props => props.pV || 0}px;
  opacity: 0.5;
  position: absolute;
  width: 110%;
  height: 105%;
  margin: 0;
  resizeMode: cover;
`;

export const Button = styled.TouchableOpacity`
  padding-vertical: ${props => props.large ? 8 : 2}px;
  padding-horizontal: ${props => props.large ? 20 : 8}px;
  border: solid 1.5px #F94A20;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: ${props => props.large ? '100%' : 'auto'};
  margin-vertical: ${props => props.mV || 0}px;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
`;

export const Image = styled.Image`
  width: 75%;
  height: 120px;
  resizeMode: contain;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#D48'
})`
  margin-vertical: 25px;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 13 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-vertical: 2.5px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || '#fff'};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.color || '#fff'};
`;