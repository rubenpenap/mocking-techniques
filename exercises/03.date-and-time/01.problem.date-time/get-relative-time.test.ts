import { getRelativeTime } from './get-relative-time.js';

beforeAll(() => {
	vi.useFakeTimers();
});

afterAll(() => {
	vi.useRealTimers();
});

test('returns "Just now" for the current date', () => {
	vi.setSystemTime(new Date('2024-06-01 00:00:00.000Z'));
	expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
		'Just now',
	);
});

test('returns "Just now" for a date less than a minute ago', () => {
	vi.setSystemTime(new Date('2024-06-01 00:00:40.000Z'));
	expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
		'Just now',
	);
});

test('returns "minute ago" for a date a minute ago', () => {
	vi.setSystemTime(new Date('2024-06-01 00:01:05.000Z'));
	expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
		'1 minute ago',
	);
});
