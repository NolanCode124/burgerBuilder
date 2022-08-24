import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {BurgerBuilder} from "./burger-builder";
import {Header} from "./components/header";
import styled from "styled-components";

export const AuthenticatedApp = () => {
  // react-router is not really necessary here for 1 route
  return <>
    <Header/>
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BurgerBuilder/>}/>
        </Routes>
      </BrowserRouter>
    </Main>
  </>
}

const Main = styled.div`
  padding: 2rem 2rem;
`
