import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPopularMovies = () => {
     const dispatch = useDispatch();
     const getNowPopularMovies = async () => {
       const response = await fetch(
         "https://api.themoviedb.org/3/movie/top_rated",
         API_OPTIONS
       );
       const data = await response.json();
       dispatch(addNowPopularMovies(data.results));
     };

     useEffect(() => {
       getNowPopularMovies();
     }, []);
};

export default useNowPopularMovies;