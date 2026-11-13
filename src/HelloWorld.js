
import { useState } from "react";
function HelloWorld() {
  const [compte, setCompte] = useState(0);
  return (
    <div>
      <h1>{compte}</h1>
      <button onClick={() => setCompte(compte + 1)}>+</button>
    </div>
  );
}
export default HelloWorld;
