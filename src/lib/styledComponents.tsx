import styled from "styled-components";
import { Link } from "react-router-dom";

export const Flex = styled.div`
margin: 1em auto;
display: flex;
width: 90vmin;
& > * {
  margin: .1em;
}
img {
  width: 30%;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
}
`

export const StyledLink = styled(Link)`
width: 100%;
background-color: ${({ color }) => color || 'dodgerblue'};
padding: .3em;
font-size: 1.3em;
color: white;
text-decoration: none;
`

export const StyledButton = styled.button`
width: 100%;
background-color: ${({ color }) => color || 'dodgerblue'};
padding: .3em;
font-size: 1.3em;
color: white;
text-decoration: none;
border: none;
`