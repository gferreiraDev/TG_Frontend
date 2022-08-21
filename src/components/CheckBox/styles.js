import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"

export const Box = styled.View`
  flex-direction: ${props => props.row ? 'row' : 'column'}
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align ||'center'};
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
  width: ${props => props.width? props.width : 100}%;
  background-color: ${props => props.bg || 'transparent'};
  padding-vertical: ${props => props.pV || 0}px;
  padding-horizontal: ${props => props.pH || 0}px;
  border-radius: ${props => props.rad || 0}px;
  border-top-left-radius: ${props => props.tlr || 0}px;
  border-top-right-radius: ${props => props.trr || 0}px;
  border-bottom-left-radius: ${props => props.blr || 0}px;
  border-bottom-right-radius: ${props => props.brr || 0}px;
`;

export const Card = styled.TouchableOpacity`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height + 'px' : 'auto'};
  margin-vertical: ${props => props.mV || 0}px;
  margin-horizontal: ${props => props.mH || 0}px;
  border-radius: ${props => props.radius || 0}px;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  background-color: ${props => props.color || 'transparent'};
  padding-vertical: ${props => props.pV || 0}px;
  padding-horizontal: ${props => props.pH || 0}px;
  border: ${props => props.border ? 'solid 1px #fff' : 'none'};
`;

export const Icon = styled(Ionicons).attrs(props => ({
  size: 22,
  color: props.color ? props.color : "#479"
}))`
`;

export const Text = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  color: ${props => props.color || '#fff'};
  margin-horizontal: ${props => props.mH || 0}px;
  margin-vertical: ${props => props.mV || 5}px;
`;