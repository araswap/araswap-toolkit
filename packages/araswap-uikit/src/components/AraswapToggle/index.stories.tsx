import React, { useState } from "react";
import AraswapToggle from "./AraswapToggle";

export default {
  title: "Components/AraswapToggle",
  component: AraswapToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <AraswapToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <AraswapToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
