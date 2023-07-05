import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';

import Home from 'pages/Home';

import { MockAPIResponse } from 'utils';

describe('Home', () => {
  it('should render Home correctly', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home showInfo={MockAPIResponse} loading={false} />
        </ThemeProvider>
      </Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole('heading', { name: 'The Powerpuff Girls' })).toBeInTheDocument();
  });
});
