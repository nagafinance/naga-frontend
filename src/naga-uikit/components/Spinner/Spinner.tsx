import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";


const rotate = keyframes`
from {
  transform: translate3d(0px, 0, 0);
}
to {
  transform: translate3d(-100%, 0, 0);
}
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <image width="40" height="40" href="./dog_walk.png"/>
    </Svg>
  );
};

const Container = styled.div`
  width: calc(40px * var(--pixel_size));
  height: calc(40px * var(--pixel_size));
  /* background: blue; */
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
animation: run_sprite 1s steps(3) infinite;
width: calc(120px * var(--pixel_size));
position: absolute;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
