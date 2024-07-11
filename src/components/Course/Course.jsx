import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { id, image, title, description, price, time } = course;
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Course.propTypes = {};

export default Course;
