import { renderHook, act } from '@testing-library/react';
import { useTest } from './hooks';

test('incrementが呼ばれるとcountが増える', () => {
  const { result } = renderHook(() => useTest());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
