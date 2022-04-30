import { rest } from 'msw';
import { setupServer } from 'msw/node';

import {
  render,
  fireEvent,
  screen,
} from 'test-utils';

import NewPage from '.';

const testText = 'Oh hey there, World';

export const handlers = [
  rest.get('/api/', (req, res, ctx) => (
    res(ctx.json([testText]), ctx.delay(150))
  )),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
beforeEach(() => render(<NewPage />));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('NewPage', () => {
  test('renders a button to regenerate text', () => {
    const buttonElement = screen.getByText(/Click to \(re\)generate text./i);
    expect(buttonElement).toBeInTheDocument();

    const pElement = screen.queryByText(/Oh hey there, World/i);
    expect(pElement).not.toBeInTheDocument();
  });

  describe('WHEN regenerate button is pressed', () => {
    test('should fetch and display a set of text', async () => {
      fireEvent.click(screen.getByText(/Click to \(re\)generate text./i));
      const pElement = await screen.findByText(/Oh hey there, World/i);
      expect(pElement).toBeInTheDocument();
    });
  });
});
