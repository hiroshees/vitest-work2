import { renderHook, act } from '@testing-library/react';
import { useTestView } from './hooks';

test('increment で count が増える', () => {
  const { result } = renderHook(() => useTestView());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
