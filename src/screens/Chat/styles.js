import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #130224;
  justify-content: flex-start;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #184;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#D48'
})`
  margin-vertical: 25px;
`;