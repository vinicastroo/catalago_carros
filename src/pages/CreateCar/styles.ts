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
  padding: 2rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  h1{
    text-align:center;
    color: #2978B5;
  }

  button{
    width: 100%;
    background: #2978B5;
    padding: 1rem;
    color: #fff;
    border: 0;
    border-radius: 4px;
  }
`;
