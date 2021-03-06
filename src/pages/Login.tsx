import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    flex: 1;
    font-size: 18px;
    font-weight: 300;
`

const Input = styled.input`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const LinkBlock = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Label>
                        Login
                        <Input />
                    </Label>
                    <Label>
                        Password
                        <Input />
                    </Label>
                    <Link to="/register">
                        Register
                    </Link>
                    <Button>Login</Button>
                    <LinkBlock>DO NOT YOU REMEMBER THE PASSWORD?</LinkBlock>
                    <LinkBlock>CREATE A NEW ACCOUNT</LinkBlock>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
