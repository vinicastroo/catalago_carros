import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const Menu: React.FC = () => {

  return (
    <Container>
      <div>
        <Link to="/">
          <span>
            Catalogo
          </span>
        </Link>
      </div>
    </Container>
  )
}


export default Menu;
