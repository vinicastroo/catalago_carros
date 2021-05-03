import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  background:#2978B5;

  > div{
    padding: 2rem 0;
    width: 100%;
    max-width: 1160px;

    span{
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;
