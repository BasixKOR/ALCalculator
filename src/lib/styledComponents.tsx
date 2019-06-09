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

export const SubmitLink = styled(Link)`
display: block;
color: white;
text-decoration: none;
width: 100%;
background-color: plum;
padding: .3em;
text-align: center;
font-size: 1.3em;
margin-top: auto;
`