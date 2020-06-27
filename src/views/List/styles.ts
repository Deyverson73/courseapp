import styled from 'styled-components/native';

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#5d3ea8',
})``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  height: 40%;
  background-color: #5d3ea8;
`;

export const Details = styled.View`
  height: 20%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -15%;
  background-color: #ffffff;
`;
