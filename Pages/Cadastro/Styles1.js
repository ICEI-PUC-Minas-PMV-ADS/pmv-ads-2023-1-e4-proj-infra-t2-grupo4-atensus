import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`

export const Title = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const Input = styled.TextInput`
  border: 2px solid ;
  margin-bottom: 15px;
  padding: 13px 17px;
  color: #000;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #7fffd4;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  `