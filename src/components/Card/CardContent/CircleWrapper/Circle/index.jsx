import styled from "styled-components";

const Circle = styled.div`
  width: 560px;
  height: 560px;

  background: #ff5656;
  mix-blend-mode: screen;
  border-radius: 50%;

  @media only screen and (max-width: 1600px) {
    width: calc(560px * 0.8);
    height: calc(560px * 0.8);
  }

  @media only screen and (max-width: 1280px) {
    width: calc(560px * 0.64);
    height: calc(560px * 0.64);
  }

  @media only screen and (max-width: 768px) {
    width: calc(560px / 2);
    height: calc(560px / 2);
  }
`;

export default Circle;
