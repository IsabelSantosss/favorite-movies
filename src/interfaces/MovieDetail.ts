export interface MovieDetails {
      genres: { id: number, name: string }[];
      id: number;
      imdbId: string;
      tagline: string;
      title: string;
      originalTitle: string;
      originalLanguage: string;
      originCountry: string[];
      overview: string;
      popularity: number;
      posterPath: string;
      productionCompanies: { id: number, logoPath: string, name: string, originCountry: string }[];
      releaseDate: string;
      spokenLanguage: { [key: string]: string }[];
      voteCount: number;
      voteAverage: number;
}