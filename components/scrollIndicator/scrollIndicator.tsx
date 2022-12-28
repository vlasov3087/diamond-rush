//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../../hooks/useEventListener";

const ProgressContainer = styled.div`
  height: 100%;
  width: 3px;
  background: #3b3a3b;
  box-shadow: inset -0.75px 0px 1px rgba(31, 31, 31, 0.6),
    inset 0.75px 0px 1px rgba(31, 31, 31, 0.5);
`;
const ProgressBar = styled.div`
  width: 3px;
  background: ${(props: any) =>
    props.color ||
    "linear-gradient(125.06deg, #0061FF -2.31%, #60EFFF 97.12%);"};
  height: ${(props: any) => props.height || 0}%;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const ScrollIndicator: FC<any> = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEventListener(undefined, "scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setProgressWidth(scrolled);
  });

  return (
    <ProgressContainer>
      <ProgressBar height={progressWidth} color={color}>
        {showText && (
          <ProgressText height={progressWidth}>{`${Math.round(
            progressWidth
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  );
};

export default ScrollIndicator;
