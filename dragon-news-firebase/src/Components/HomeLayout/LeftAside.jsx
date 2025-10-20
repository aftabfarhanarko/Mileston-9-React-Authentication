import React, { Suspense } from "react";
import Caterogy from "../Caterogy";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>
}>
        <Caterogy></Caterogy>
      </Suspense>
    </div>
  );
};

export default LeftAside;
