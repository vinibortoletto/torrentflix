import React, { useContext, useState, useEffect } from 'react';
import { useData } from './Data';

const LibraryContext = React.createContext();

export function useLibrary() {
  return useContext(LibraryContext);
}

const API_KEY = '4cd4fecb78a01444edbe1c1aa9635558';
const API_BASE = 'https://api.themoviedb.org/3';

export function LibraryProvider({ children }) {
  const { language } = useData();
  const libraryLanguage =
    language === 'br' ? 'language=pt-BR' : 'language=en-US';
  const [libraryRows, setLibraryRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spotlight, setSpotlight] = useState();

  async function basicFetch(endpoint) {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
  }

  async function getLibraryRows() {
    return [
      {
        slug: 'originals',
        title: language === 'en' ? 'netflix originals' : 'originais netflix',
        item: await basicFetch(
          `/discover/tv?with_networks=213&api_key=${API_KEY}&${libraryLanguage}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'trending',
        title: language === 'en' ? 'trending' : 'em alta',
        item: await basicFetch(
          `/trending/all/week?&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'toprated',
        title: language === 'en' ? 'top rated' : 'populares',
        item: await basicFetch(
          `/movie/top_rated?&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'action',
        title: language === 'en' ? 'action' : 'ação',
        item: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'comedy',
        title: language === 'en' ? 'comedy' : 'comédia',
        item: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'horror',
        title: language === 'en' ? 'horror' : 'terror',
        item: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'romance',
        title: language === 'en' ? 'romance' : 'romântico',
        item: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },

      {
        slug: 'documentary',
        title: language === 'en' ? 'documentary' : 'documentário',
        item: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}&${libraryLanguage}`,
        ),
      },
    ];
  }

  async function getDetailedData(id) {
    let newSpotlight = {};

    if (id)
      newSpotlight = await basicFetch(
        `/tv/${id}?&api_key=${API_KEY}&${libraryLanguage}`,
      );

    setSpotlight(newSpotlight);
  }

  function getSpotlightMovie(rows) {
    const randomNumber = Math.floor(Math.random() * 19);
    const randomSpotlight = rows[0].item.results[randomNumber];
    getDetailedData(randomSpotlight.id);
  }

  useEffect(() => {
    async function fetchContent() {
      const newLibraryRows = await getLibraryRows();
      setLibraryRows(newLibraryRows);

      await getSpotlightMovie(newLibraryRows);
    }

    fetchContent();
  }, []);

  useEffect(() => {
    // Set loading to true while fetching content
    if (spotlight) setLoading(false);
    else setLoading(true);
  }, [spotlight]);

  const value = { libraryRows, loading, setLoading, spotlight };

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}
