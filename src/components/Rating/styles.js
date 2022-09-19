import styled from "styled-components"
import { Ionicons } from "@expo/vector-icons"


export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.mT || 0}px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
`;

export const Icon = styled(Ionicons).attrs({
  size: 18,
  color: '#e70'
})`
  margin-horizontal: 2px;
`