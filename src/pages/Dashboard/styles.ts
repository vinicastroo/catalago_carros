import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  display:flex;
  justify-content:center;

  background:#fcfcfc;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 4rem 0;
`;

export const Cars = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 2rem;
`;

export const Car = styled.div`
  display:flex;
  flex-direction: row;

  background:#fff;
  border: 1px solid #eee;
  width:100%;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }

  img{

    width: 250px;
    height: 290px;
  }

  > div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;

    span{
      margin: 0.5rem 0;
    }

    textarea{
      border: 0;
      resize: none;
    }
  }

  >div:last-child{
    padding: 1rem;
  }
`;

export const Title = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;

  h1{
    color: #2978B5;
  }

  span{
    background: #2978B5;
    color: #fff;
    padding: 1rem 2rem;
    font-weight: 700;
  }
`;
