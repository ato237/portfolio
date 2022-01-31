import styled from "styled-components";
import {Link as Links } from 'react-router-dom'

export const Container = styled.div`

`
export const Nav = styled.ul`
display: flex;
list-style-type:none;
justify-content: center;

`

export const Elemenets = styled.li`
margin:20px;
font-weight: 600;
color: grey;


`
export const ElemenetsL = styled.li`
font-size:25px;
padding: 20px;
font-weight: 800;
color: #54387D;


&:hover{
    cursor:pointer;
}

`

export const Route = styled(Links)`
list-style-type: none;
text-decoration: none;
color:grey;


&:hover{
    cursor: pointer;
    color: #54387D;
}
`
