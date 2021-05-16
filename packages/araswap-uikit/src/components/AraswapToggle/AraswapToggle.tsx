import React from "react";
import { AraswapStack, AraswapInput, AraswapLabel } from "./StyledAraswapToggle";
import { AraswapToggleProps, scales } from "./types";

const AraswapToggle: React.FC<AraswapToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <AraswapStack scale={scale}>
    <AraswapInput id={props.id || "araswap-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <AraswapLabel scale={scale} checked={checked} htmlFor={props.id || "araswap-toggle"}>
      <div className="araswaps">
        <div className="araswap" />
        <div className="araswap" />
        <div className="araswap" />
        <div className="butter" />
      </div>
    </AraswapLabel>
  </AraswapStack>
);

AraswapToggle.defaultProps = {
  scale: scales.MD,
};

export default AraswapToggle;
