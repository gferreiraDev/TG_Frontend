import styled from "styled-components/native"

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 150px;
  resizeMode: cover;
`;

export const ImageView = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 150px;
  opacity: 0.45;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;
`;