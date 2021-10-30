import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';


const Container = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;

`

const Input = styled.input`
    border: none;
`

const Middle = styled.div`
   flex: 1;
`;

const Logo = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 0;
`

const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    const auth = true;

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'grey', fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Middle>
                    <Logo>Lama</Logo>
                </Middle>
                <Right>
                    {!auth && <React.Fragment>
                        <MenuItem>
                            <Link to="/register">
                                Register
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/login">
                                Sign in
                            </Link>
                        </MenuItem>
                    </React.Fragment>}
                    {auth && <MenuItem>Out</MenuItem>}
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
