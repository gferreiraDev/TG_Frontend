import styled from "styled-components/native"

export const Area = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
  border: solid 1.5px #333;
  border-color: ${props => props.error ? '#c44' : props.active ? '#F80' : '#333'};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 15px 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  resizeMode: contain;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-between'};
  align-items: center;
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  boder: solid 1px #f70;
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.error ? '#C44' : '#fff'};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  text-align: center;
`;