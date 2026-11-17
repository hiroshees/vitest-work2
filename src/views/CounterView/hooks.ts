import { useEffect, useState } from 'react';
import { type Mode } from '@/views/CounterView/types';


export const useCounterView = () => {
  const [count, setCount] = useState(0);
  const [selectMode, setSelectMode] = useState<Mode>('both');

  const handlePlusButtonClick = () => {
    setCount(count + 1);
  };
  const handleMinusButtonClick = () => {
    console.log('マイナスボタンがおされた');
    if (count <= 0) return;
    setCount(count - 1);
  };
  const handleChangeMode = (mode: Mode) => {
    setSelectMode(mode);
  };

  const testFunction = (n: number) => {
    return n + 1;
  };

  useEffect(() => {
    console.log('現在のカウント:', count);
  }, [count]);

  return {
    count,
    handlePlusButtonClick,
    handleMinusButtonClick,
    selectMode,
    handleChangeMode,
    testFunction,
  };
};
