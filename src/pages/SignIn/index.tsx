import React, { useRef , useCallback} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrros from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content , Background } from './styles';

const SignIn : React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email:Yup.string().required('E-mail Obrigatório').email('Digite uma e-mail válido'),
        password:Yup.string().required('Senha Obrigatório'),
      });

      await schema.validate(data,{
        abortEarly:false,
      });
    }catch(err){
      console.log(err);

      const errors = getValidationErrros(err);

      formRef.current?.setErrors(errors);
    }
  },[]);

  return (

  
  <Container>
    <Content>
       <img src={logoImg} alt="GoBarber"/>

       <Form ref={formRef} onSubmit={handleSubmit}>
         <h1>Faça o seu Logon</h1>

         <Input icon={FiMail} name="email" placeholder="Email" />
         <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
         <Button type="submit">Entrar</Button>

         <a href="forgot">Esqueci a minha senha</a>
       </Form>
       <a href="">
        <FiLogIn/>
      Criar Conta
        </a>
    </Content>
    <Background/>
  </Container>
);

  };
export default SignIn;