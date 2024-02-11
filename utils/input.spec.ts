import { debounce } from './input';

vi.useFakeTimers();

describe('Given debounce util method', () => {
	describe('When it is called', () => {
		test('Then it should execute the function after the specified delay', () => {
			const fn = vi.fn();
			const debouncedFn = debounce(fn, 1000);

			debouncedFn('test');

			expect(fn).not.toBeCalled();

			vi.advanceTimersByTime(1000);

			expect(fn).toBeCalledWith('test');
		});

		test('Then it should execute the function only once if called multiple times within the delay', () => {
			const fn = vi.fn();
			const debouncedFn = debounce(fn, 1000);

			debouncedFn('test1');
			debouncedFn('test2');
			debouncedFn('test3');

			expect(fn).not.toBeCalled();

			vi.advanceTimersByTime(1000);

			expect(fn).toBeCalledTimes(1);
			expect(fn).toBeCalledWith('test3');
		});
	});
});
