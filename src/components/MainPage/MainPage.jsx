import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Platform from "../Platform/Platform";

const MainPage = () => {
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [craveMovies, setCraveMovies] = useState([]);
  const [disneyMovies, setDisneyMovies] = useState([]);
  const [appleMovies, setAppleMovies] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=8&watch_region=CA&api_key=32fba61adda7634622096950aa45f404"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=230&watch_region=CA&api_key=32fba61adda7634622096950aa45f404"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=337&watch_region=CA&api_key=32fba61adda7634622096950aa45f404"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=350&watch_region=CA&api_key=32fba61adda7634622096950aa45f404"
      ),
    ]).then(async (responses) => {
      for (let i = 0; i < responses.length; i++) {
        const movies = await responses[i].json();
        if (i === 0) {
          setNetflixMovies(movies.results);
        } else if (i === 1) {
          setCraveMovies(movies.results);
        } else if (i === 2) {
          setDisneyMovies(movies.results);
        } else if (i === 3) {
          setAppleMovies(movies.results);
        }
      }
    });
  }, []);

  return (
    <>
      <Layout>
        <Platform title="Netflix" movies={netflixMovies} />
        <Platform title="Crave" movies={craveMovies} />
        <Platform title="Disney" movies={disneyMovies} />
        <Platform title="Apple Plus" movies={appleMovies} />
      </Layout>
    </>
  );
};

export default MainPage;
