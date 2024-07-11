import React from "react";
import PropTypes from "prop-types";

const CourseCalculations = () => {
  return (
    <div className="h-1/2 md:w-1/4 bg-white p-6 rounded-xl">
      <h4 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining 7 hr
      </h4>
      <hr className="mt-4 mb-4 border-[1px]" />
      <h2 className="text-[20px] font-bold">Course Name</h2>
      <hr className="mt-4 mb-4 border-[1px]" />
      <p className="text-base font-medium">Total Credit Hour :</p>
      <hr className="mt-4 mb-4 border-[1px]" />
      <p className="text-base font-semibold">Total Credit Hour : USD</p>
    </div>
  );
};

CourseCalculations.propTypes = {};

export default CourseCalculations;
