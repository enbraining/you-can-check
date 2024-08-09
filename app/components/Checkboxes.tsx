'use client';

import { useEffect, useState } from 'react';
import { getRandom } from '../utils/random';

export default function Checkboxes({
  isGoal,
  isAny,
}: {
  isGoal: any;
  isAny: any;
}) {
  const [random, setRandom] = useState<number>();

  useEffect(() => {
    const fetchRandom = async () => {
      setRandom(await getRandom());
    };
    fetchRandom();
  }, []);

  const getCheckbox = () => {
    const checkbox = [];
    for (var i = 0; i < 100; i++) {
      checkbox.push(
        i != random ? (
          <input
            key={i}
            onClick={isAny}
            type="checkbox"
            style={{ zoom: '2.0' }}
          />
        ) : (
          <input
            key={i}
            onClick={isGoal}
            type="checkbox"
            style={{ zoom: '2.0' }}
          />
        ),
      );
    }
    return checkbox;
  };

  return (
    <div className="grid grid-cols-10">
      {getCheckbox().map((checkbox) => checkbox)}
    </div>
  );
}
