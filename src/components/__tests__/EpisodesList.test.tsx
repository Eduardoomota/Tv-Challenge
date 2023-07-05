import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import EpisodesList from 'components/EpisodesList';

import { MemoryRouter } from 'react-router-dom';

const episodes = [
  {
    id: 1,
    name: 'Escape from Monster Island',
    airdate: '2016-04-04',
  },
];

describe('Espisodes List', () => {
  it('should be render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <EpisodesList episodes={[]} />
      </ThemeProvider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText('Episode Name')).toBeInTheDocument();
    expect(screen.getByText('Airdate')).toBeInTheDocument();
  });

  it('should be render episodes correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <EpisodesList episodes={episodes} />
      </ThemeProvider>,
      { wrapper: MemoryRouter }
    );

    const episode = episodes[0];

    expect(screen.getByText('Episode Name')).toBeInTheDocument();
    expect(screen.getByText('Airdate')).toBeInTheDocument();
    expect(screen.getByText(episode.name)).toBeInTheDocument();
    expect(screen.getByText(episode.airdate)).toBeInTheDocument();
  });
});
