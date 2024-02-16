import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        API_OPTIONS
      );
      const data = await response.json();

      const filteredData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : data.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
      
    };

    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useMovieTrailer;