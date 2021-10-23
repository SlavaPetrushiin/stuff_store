import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    margin: 3px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

interface ICategoryItemProps {
    img: string;
    title: string;
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ img, title }) => {
    return (
        <Container>
            <Image src={img} />
            <Info>
                <Title>{title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
