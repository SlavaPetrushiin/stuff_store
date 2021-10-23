import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
 
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${(props: { color: string }) => props.color};
    color: white;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <Icon color="3B5999">
                        <FacebookIcon />
                    </Icon>
                    <Icon color="E4405F">
                        <InstagramIcon />
                    </Icon>
                    <Icon color="55ACEE">
                        <TwitterIcon />
                    </Icon>
                    <Icon color="E60023">
                        <PinterestIcon />
                    </Icon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                    </ContactItem>
                    <ContactItem>
                        <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
                    </ContactItem>
                    <ContactItem>
                        <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@lama.dev
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Right>
            </Right>
        </Container >
    )
}

export default Footer
