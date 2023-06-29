const API_KEY = `323feb2b334a1ab1620295d851f665df`;
const BASE_URL = `https://api.themoviedb.org/3`;

export const getMovie = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching movie data: ' + error);
  }
};

export const getMovieByName = async ({ searchQuery }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching movie data: ' + error);
  }
};

export const getInfoMovie = async ({ movieId }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?&api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching movie data: ' + error);
  }
};

export const getCredits = async ({ movieId }, credits) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/${credits}?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching movie data: ' + error);
  }
};
