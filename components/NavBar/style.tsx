import styled from "styled-components";


export const NavContainer = styled.div`

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    align-items: flex;
    height:60px;
    width: 100%;
    background-color: #10214d;
    color: black;

`

export const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

`

export const NavLi = styled.li`
    margin-left: 10px;
    margin-right: 30px;
    font-size: 22px;
    font-weight: bold;
    color: #1d78bc;
    transition: 0.6s color;

    &:hover {
        border-radius: 4px;
        color: #2199f5;
    }
    

`

export const NavImg = styled.ul `
    display: flex;
    flex-direction: row;
    align-items: baseline;
    list-style-type: none;


    margin: 0;
    padding: 0;
`


export default {NavContainer, NavUl, NavLi, NavImg}