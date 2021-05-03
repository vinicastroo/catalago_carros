import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';

import { Container, Content, ContentContainer, Title, Cars, Car } from './styles';

interface CarsProps {
  image: string;
  video: string;
  name: string;
  year: string;
  model: string;
  textarea: string;
}
const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<CarsProps[]>([]);

  useEffect(() => {
    const localCars = localStorage.getItem('veiculos');

    if (localCars) {
      const parsedLocalCars = JSON.parse(localCars);

      setCars(parsedLocalCars);
    }
  }, [])

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>
          <Title>
            <h1>Carros</h1>
            <Link to="/create">
              <span>
                Adicionar Veículo
              </span>
            </Link>
          </Title>

          <Cars>
            {cars.map((car, index) => (

              <Link to={`/${index}`}>
                <Car>
                  <div>
                    <img src={car.image} alt="" />
                  </div>
                  <div>
                    <span>
                      {`Nome: ${car.name} - Ano: ${car.year}`}
                    </span>
                    <span>{`Modelo: ${car.model}`}</span>
                    <p>{`Descrição: ${car.textarea}`}</p>
                  </div>
                </Car>
              </Link>
            ))}
          </Cars>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
