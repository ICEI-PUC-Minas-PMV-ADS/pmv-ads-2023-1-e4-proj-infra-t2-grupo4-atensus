import React from 'react';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton,
  Text
} from './Styles1';

function Cadastro() {
  return (
     <KeyboardView>
      <Container>
        <Title>Cadastre-se</Title>
        <Input 
          placeholderTextColor="#000"
          placeholder="Nome"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Idade"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Altura"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Peso"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Endereço"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Sitomas"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="CPF"
        />
        <Input 
          placeholderTextColor="#000"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>
            Cadastrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
    )
}

export default Cadastro;