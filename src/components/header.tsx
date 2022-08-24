import {useAuth} from "../auth-context";
import styled from "styled-components";

export const Header = () => {
  const {logout} = useAuth()
  return <Container>
    <h1>Burger Builder</h1>
    <a onClick={logout}>logout</a>
  </Container>
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px #eee solid;
`
