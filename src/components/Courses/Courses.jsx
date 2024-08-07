import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleSelect }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelect={handleSelect}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default Courses;
