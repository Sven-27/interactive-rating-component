import { useState } from "react";
import Rating from './compoents/Rating'
import Thanks from './compoents/Thanks'

function App() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="w-[clamp(327px,60vw,412px)] bg-gradient-to-b from-[#232a34] to-[#181e27] rounded-2xl sm:rounded-3xl p-[24px] sm:py-[32px]">
      {
        selected === null ? (
           <Rating setSelected={setSelected} />
        ) : (
          <Thanks selected={selected} />
        )
      }
    </main>
  )
}

export default App
