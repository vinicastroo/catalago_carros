import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import Menu from '../../components/Menu';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { Container, Content, ContentContainer } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback((data) => {
    const veiculos = localStorage.getItem('veiculos');

    if (!veiculos) {
      localStorage.setItem('veiculos', JSON.stringify([data]))
    }
    else {
      const parsedVeiculos = JSON.parse(veiculos);
      localStorage.setItem('veiculos', JSON.stringify([...parsedVeiculos, data]))
    }

    history.push('/');

  }, [history]);

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>
          <h1>Adição de Veículo</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>

            <Input name="image" placeholder="Digite o endereço da imagem do veículo" label="URL Imagem" />
            <Input name="video" placeholder="Digite o endereço do video do veículo" label="URL Video" />

            <Input name="name" placeholder="Digite o nome do veículo" label="Nome" />
            <Input name="year" placeholder="Digite o ano do veículo" label="Ano" />
            <Input name="model" placeholder="Digite o modelo do veículo" label="Modelo" />

            <Textarea name="textarea" label="Descrição" />

            <button type="submit">Cadastrar</button>
          </Form>

        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
