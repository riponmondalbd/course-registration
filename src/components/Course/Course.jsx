import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { PiBookOpenLight } from "react-icons/pi";

const Course = ({ course, handleSelect }) => {
  const { id, image, title, description, price, time } = course;
  return (
    <div className="bg-white p-4 rounded-xl">
      <img className="rounded-lg" src={image} alt="" />
      <h3 className="text-lg font-semibold mt-4 mb-3">{title}</h3>
      <p className="text-[#1c1b1b99] text-sm font-normal">{description}</p>
      <div className="flex justify-between mt-4 mb-6">
        <div className="flex ">
          <FiDollarSign className="text-2xl" />
          <p className="text-[#1c1b1b99] text-base font-medium ml-3">
            Price: {price}
          </p>
        </div>
        <div className="flex">
          <PiBookOpenLight className="text-2xl" />
          <p className="text-[#1c1b1b99] text-base font-medium ml-3">
            Credit: {time}hr
          </p>
        </div>
      </div>
      <button
        onClick={() => handleSelect(course)}
        className="text-lg font-semibold bg-[#2F80ED] text-white w-full rounded-lg py-[9px]"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Course;
