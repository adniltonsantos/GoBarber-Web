import React, {useCallback, useRef} from 'react';
import { FiArrowLeft, FiMail ,FiUser, FiLock } from 'react-icons/fi';
import { FormHandles} from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrros from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content , Background } from './styles';

const SignUP : React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email:Yup.string().required('E-mail Obrigatório').email('Digite uma e-mail válido'),
        password:Yup.string().min(6,'No minimo 6 digitos'),
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
    <Background/>

    <Content>
       <img src={logoImg} alt="GoBarber"/>

       <Form ref={formRef} onSubmit={handleSubmit}> 
         <h1>Faça o seu Logon</h1>

         <Input icon={FiUser} name="name" placeholder="Nome" />
         <Input icon={FiMail} name="email" placeholder="Email" />
         <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
         <Button type="submit">Cadastrar</Button>

        
       </Form>
       <a href="">
        <FiArrowLeft/>
      Voltar para o Logon
        </a>
    </Content>
  
  </Container>
  )
}

export default SignUP;