
import { Nav } from "react-bootstrap"

import styled from "styled-components"


function styles() {

}

export const Container = styled.div`
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    position: fixed;
`

export const SocialButton = styled(Nav.Link)`
        width: 70px;
        height: 70px;
        transition: transform .5s ease;
        &:hover {
            transform: scale(1.5);
            transition: transform .3s ease;
            width: 80px;
            height: 80px;
        }
`

export default styles;