'use client';

import { useCallback } from 'react';
import Checkboxes from './components/Checkboxes';

export default function Home() {
  const isGoal = useCallback(() => {
    alert('찾았습니다!');
  }, []);

  return (
    <main className="flex w-full min-h-screen">
      <div className="m-auto">
        <h1 className="text-center mb-5 font-semibold text-xl">
          하나만 정답이다
        </h1>
        <Checkboxes isGoal={isGoal} />
      </div>
    </main>
  );
}
