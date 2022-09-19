import styled from "styled-components/native"
import { Ionicons, Entypo } from "@expo/vector-icons"

export const Tab = styled.View`
  height: 40px;
  background-color: #2A0B47;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: 22,
  color: '#fff',
})``;

export const Enticon = styled(Entypo).attrs({
  size: 22,
  color: '#fff',
})``;

export const Label = styled.Text`
  font-size: 14px;
  color: #05F7C0;
`;