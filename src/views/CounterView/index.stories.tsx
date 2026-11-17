import { CounterView } from '.';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';

const meta: Meta<typeof CounterView> = {
  component: CounterView,
  // tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CounterView>;

/**
 * ここにドキュメントが表示されます。
 * こんにちは
 */
//
export const Test: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const counterText = await canvas.findByText('カウンター');
    expect(counterText).toBeVisible();
    // const counterText2 = await canvas.findByText('エラー');
    // expect(counterText2).toBeVisible();

    const plusButton = await canvas.findByTestId('plusButton');
    const minusButton = await canvas.findByTestId('minusButton');
    await expect(await canvas.findByTestId('countText')).toHaveTextContent('0');
    await userEvent.click(plusButton);
    await expect(await canvas.findByTestId('countText')).toHaveTextContent('1');
    await userEvent.click(minusButton);
    await expect(await canvas.findByTestId('countText')).toHaveTextContent('0');
    await userEvent.click(minusButton);
    await expect(await canvas.findByTestId('countText')).toHaveTextContent('0');
  },
};
