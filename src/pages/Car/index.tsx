import React, { useRef, useCallback, useState, useEffect } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useParams, useHistory } from 'react-router-dom';

import Menu from '../../components/Menu';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { Container, Content, ContentContainer } from './styles';

interface CarsProps {
  image: string;
  video: string;
  name: string;
  year: string;
  model: string;
  textarea: string;
}

interface ParamTypes {
  id: string;
}
const Dashboard: React.FC = () => {
  const [car, setCar] = useState<CarsProps>();

  const { id } = useParams<ParamTypes>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  useEffect(() => {
    const localCars = localStorage.getItem('veiculos');

    if (localCars) {
      const parsedLocalCars = JSON.parse(localCars);

      setCar(parsedLocalCars[id]);
    }


  }, [id])

  const handleSubmit = useCallback((data) => {
    const veiculos = localStorage.getItem('veiculos');

    if (!veiculos) {
      localStorage.setItem('veiculos', JSON.stringify([data]))
    }
    else {
      const parsedVeiculos = JSON.parse(veiculos);
      parsedVeiculos[id] = data;
      localStorage.setItem('veiculos', JSON.stringify([...parsedVeiculos]))
    }

    history.push('/');
  }, [id, history]);

  const handleRemove = useCallback(() => {
    const veiculos = localStorage.getItem('veiculos');

    if (veiculos) {
      const parsedVeiculos = JSON.parse(veiculos);
      parsedVeiculos.splice(id, 1);

      localStorage.setItem('veiculos', JSON.stringify([...parsedVeiculos]))
    }

    history.push('/');
  }, [id, history]);

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>
          <h1>
            Carro
{' '}
            {Number(id) + 1}
          </h1>

          {car?.video && (
            <iframe src={car.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )}
          <Form initialData={car} ref={formRef} onSubmit={handleSubmit}>

            <Input name="image" placeholder="Digite o endereço da imagem do veículo" label="URL Imagem" />
            <Input name="video" placeholder="Digite o endereço do video do veículo" label="URL Video" />

            <Input name="name" placeholder="Digite o nome do veículo" label="Nome" />
            <Input name="year" placeholder="Digite o ano do veículo" label="Ano" />
            <Input name="model" placeholder="Digite o modelo do veículo" label="Modelo" />

            <Textarea name="textarea" label="Descrição" />

            <div className="div_buttons">
              <button type="button" onClick={handleRemove}>Excluir</button>
              <button type="submit">Alterar</button>
            </div>
          </Form>

        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
