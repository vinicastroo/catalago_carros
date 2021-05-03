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
    padding: 1rem;
    color: #fff;
    border: 0;
    border-radius: 4px;
    margin: 0 0.5rem;
  }

  .div_buttons{
    display:flex;
    flex: row;
  }

  button:hover{
    opacity: 0.7;
  }

  button[type="submit"]{
    background: #2978B5;
  }

  button[type="button"]{
    background: #903749;
  }

  iframe{
    width: 100%;
    height: 500px;
    margin: 1rem 0;
  }
`;
