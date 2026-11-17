import { useTestView } from './hooks';

export default function TestView() {
  const { count, increment } = useTestView();
  return <button onClick={increment}>Count: {count}</button>;
}
