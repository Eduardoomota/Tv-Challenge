export type showInfoType = {
  _embedded?: {
    episodes?: episodesType[];
  };
  name?: string;
  summary?: string;
  image?: {
    medium?: string;
    original?: string;
  };
};

export type episodesType = {
  id?: number;
  name?: string;
  image?: {
    medium: string;
    original?: string;
  };
  summary?: string;
  airdate?: string;
};
