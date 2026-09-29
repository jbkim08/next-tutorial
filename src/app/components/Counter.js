"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-5">
      <p className="text-2xl">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-3 rounded bg-black px-4 py-2 text-white"
      >
        +1
      </button>
    </div>
  );
}
