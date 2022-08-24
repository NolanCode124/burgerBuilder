import {useAuth} from "./auth-context";
import styled from "styled-components";
import {Button, Card, Form, Input} from "antd";
import {useAsyncFn} from "react-use";

export const UnauthenticatedApp = () => {
  const [form] = Form.useForm();
  const {login} = useAuth()
  const [{loading, error}, loginAsync] = useAsyncFn(login, [login]);
  return <Container>
    <Header>Burger Builder</Header>
    <ShadowCard>
      <Title>Please Login</Title>
      <Form form={form} onFinish={loginAsync}>
        <Form.Item
          name={"name"}
          rules={[{required: true, message: "Please input username"}]}
        >
          <Input placeholder={"username"} type="text" id={"name"}/>
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{required: true, message: "Please input password"}]}
        >
          <Input placeholder={"password"} type="password" id={"password"}/>
        </Form.Item>
        <Form.Item>
          <LongButton loading={loading} htmlType={"submit"} type={"primary"}>
            Login
          </LongButton>
        </Form.Item>
        <Error>
          {error ? 'Username or password wrong' : null}
        </Error>
      </Form>
    </ShadowCard>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Error = styled.span`
  color: red
`

const Header = styled.h1`
  text-align: center;
`


