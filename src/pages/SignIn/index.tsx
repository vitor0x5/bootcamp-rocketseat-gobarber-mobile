import React from 'react';
import {Image} from 'react-native';

import {Container, Title} from './styles';
import logoImg from '../../assests/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
