import { Connection } from './connection.js';

beforeAll(() => {
	vi.useFakeTimers({ toFake: ['queueMicrotask'] });
});

afterAll(() => {
	vi.useRealTimers();
});

test('dispatches the "connection" event', () => {
	const connection = new Connection();
	const connectionListener = vi.fn();
	connection.addEventListener('connection', connectionListener);

	vi.runAllTicks();

	expect(connectionListener).toHaveBeenCalledOnce();
});
