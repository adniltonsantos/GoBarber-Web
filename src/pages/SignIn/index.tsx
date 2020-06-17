import React from 'react';
import { FiLogIn, FiMail, FiClock, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content , Background } from './styles';

const SignIn : React.FC = () => (
  <Container>
    <Content>
       <img src={logoImg} alt="GoBarber"/>

       <form>
         <h1>Faça o seu Logon</h1>

         <Input icon={FiMail} name="email" placeholder="Email" />
         <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
         <Button type="submit">Entrar</Button>

         <a href="forgot">Esqueci a minha senha</a>
       </form>
       <a href="">
        <FiLogIn/>
      Criar Conta
        </a>
    </Content>
    <Background/>
  </Container>
);

export default SignIn;