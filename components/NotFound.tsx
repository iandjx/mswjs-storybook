import React from "react";
import { sum } from "./sum";
const NotFound: React.FC<{}> = () => {
  const foo = sum();
  return (
    <div>
      <h1>{foo}</h1>
      <h1>404</h1>
    </div>
  );
};
export default NotFound;
