import React, { useState, useEffect } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}

export default HookCounter;
