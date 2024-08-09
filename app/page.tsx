'use client';

import { useCallback, useState } from 'react';
import Checkboxes from './components/Checkboxes';

export default function Home() {
  const [count, setCount] = useState(0);

  const isGoal = useCallback(() => {
    if (count < 10) alert(`${count}번만에 찾다니.. 운이 꽤 좋은데요?`);
    else if (count < 20) alert(`${count}번은.. 꽤 하네`);
    else if (count < 50) alert(`${count}번이나 하는건 좀..`);
    else if (count < 80) alert(`${count}번이 나올 수 있나?`);
    else alert(`${count} ㅋ`);
  }, [count]);

  const isAny = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <main className="flex w-full min-h-screen">
      <div className="m-auto">
        <div className="text-center mb-5">
          <p className="font-semibold text-2xl">{count}</p>
          <h1 className="text-xl">하나만 정답이다</h1>
        </div>
        <Checkboxes isAny={isAny} isGoal={isGoal} />
      </div>
    </main>
  );
}
