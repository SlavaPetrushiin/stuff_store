import React from 'react';
import styled from 'styled-components';

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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
`;

const Label = styled.label`
    width: calc(50% - 10px);
    margin: 20px 10px 0px 0px;
    font-size: 18px;
    font-weight: 300;
`

const Input = styled.input`
    box-sizing: border-box;
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

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Label>
                        Name
                        <Input placeholder="name" />
                    </Label>
                    <Label>
                        Last name
                        <Input placeholder="last name" />
                    </Label>
                    <Label>
                         Username
                        <Input placeholder="username" />
                    </Label>
                    <Label>
                        Email
                        <Input placeholder="email" />
                    </Label>
                    <Label>
                        Password
                        <Input placeholder="password" />
                    </Label>
                    <Label>
                        Confirm password
                        <Input placeholder="confirm password" />
                    </Label>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register





