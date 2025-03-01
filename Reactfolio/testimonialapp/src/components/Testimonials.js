import Card from "./Card";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials(props) {
  let reviews = props.reviews;
  let [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) setIndex(reviews.length - 1);
    else setIndex(index - 1);
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) setIndex(0);
    else setIndex(index + 1);
  }
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justift-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl">
      <Card review={reviews[index]}></Card>
      <div className="flex mx-auto text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button
          className="curson-pointer hover:text-voilet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="curson-pointer hover:text-voilet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cusrsor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}
export default Testimonials;
