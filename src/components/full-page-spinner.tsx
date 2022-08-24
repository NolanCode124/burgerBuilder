import styled from "styled-components";

export const FullPageSpinner = () => {
  return <Container><h1>LOADING...</h1></Container>
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`