import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';

import * as useShow from 'hooks/useShow';

import Home from 'pages/Home';

const useShowSpy = jest.spyOn(useShow, 'useShow');

const showInfo = {
  name: 'The Powerpuff Girls',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg'
  },
  summary: "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>",
  _embedded: {
    episodes: [
      {
        id: 657308,
        name: 'Escape from Monster Island',
        airdate: '2016-04-04',
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg'
        },
        summary: "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
      },
      {
        id: 657309,
        name: 'Princess Buttercup',
        airdate: '2016-04-04',
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/53/132618.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/53/132618.jpg'
        },
        summary: '<p>Buttercup becomes enamored with a team of roller derby girls called the Derbytantes. When she starts spending all of her time with them, Princess Morbucks seeks to be her replacement in the Powerpuff Girls.</p>',

      },

    ]
  }
};

describe('Home', () => {
  it('should render Home with values correctly', () => {
    useShowSpy.mockReturnValue({
      showInfo,
      loading: false
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const image = screen.getByAltText(showInfo.name);
    const summary = screen.getByTestId('summary');

    expect(screen.getByRole('heading', { name: showInfo.name })).toBeInTheDocument();
    expect(image).toHaveAttribute('src', showInfo.image.medium);
    expect(image).toHaveAttribute('alt', showInfo.name);
    expect(summary).toBeInTheDocument();
  });
});
