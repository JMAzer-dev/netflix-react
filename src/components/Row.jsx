import axios from "axios";

// icons
import * as MdChev from "react-icons/md";

// hooks
import { useEffect, useState } from "react";
import Movie from "./Movie";

//props from home
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  // request api throw props
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-semibold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChev.MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ml-4"
          size={35}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/*Map and import  */}
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChev.MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block mr-4"
          size={35}
        />
      </div>
    </>
  );
};

export default Row;
