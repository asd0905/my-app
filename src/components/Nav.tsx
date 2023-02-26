import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.4em 0;
    flex-direction: column;

    &.on {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
`

const Bi = styled(Link)`
    color: #000000;
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 10px;
`

const ToggleBtn = styled.span`
    display: block;
    width: 28px;
    height: 30px;
    margin: 30px auto 10px;
    cursor: pointer;

    span {
        position: relative;
        display: block;
        &:after, &:before {
            content: "";
            position: absolute;
            left: 0;
            top: -9px;
        }

        &:after {
            top: 9px;
        }
        &, &:after, &:before {
            width: 100%;
            height: 5px;
            background-color: #888;
            transition: all 0.3s;
            backface-visibility: hidden;
            border-radius: 2px;
        }
    }

    &.on {
        background-color: transparent;
        span {
            background-color: transparent;
            &:before {
                transform: rotate(45deg) translate(5px, 5px);
            }
            &:after {
                transform: rotate(-45deg) translate(7px, -8px);
            }
        }
    }

    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    &.on {
        display: flex;
    }
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
    }
`;

const LinkS = styled(Link)`
    font-size: 1.8em;
    font-weight: bold;
    padding: 0.2em 0 0.2em 0;
    margin-top: 0.6em;
    color: #333;
    @media screen and (min-width: 1000px) {
        font-size: 13px;
        font-weight: normal;
        margin: 0 10px;
        padding: 20px 10px;
    }
`

const Nav = () => {
    const [isToggle, setIsToggle] = useState(false);
    const onClick = () => {
        if (window.innerWidth >= 1000) {
            return;
        }
        setIsToggle((prve) => !prve);
    }
    return (
        <Wrapper className={isToggle ? 'on' : ''}>
            <Bi to='/'>LEEMINYOUNG</Bi>
            <p style={{ color: '#ccc', fontSize: '13px' }}>FLOWERS</p>
            <ToggleBtn
                className={isToggle ? 'on' : ''}
                onClick={onClick}
            >
                <span></span></ToggleBtn>
            <Menu className={isToggle ? 'on' : ''}>
                <LinkS onClick={onClick} to='/main'>Main</LinkS>
                <LinkS onClick={onClick} to='/guide'>Guide</LinkS>
                <LinkS onClick={onClick} to='/products'>Products</LinkS>
            </Menu>
        </Wrapper>
    )
}

export default Nav;