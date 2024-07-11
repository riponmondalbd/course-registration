import PropTypes from "prop-types";

const CourseCalculations = ({ courseTitle }) => {
  return (
    <div className="h-1/2 md:w-1/4 bg-white p-6 rounded-xl">
      <h4 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining <span>20</span> hr
      </h4>
      <hr className="mt-4 mb-4 border-[1px]" />
      <h2 className="text-[20px] font-bold">
        Course Name
        <div className="mt-[21px]">
          <ol className="list-decimal pl-6">
            {courseTitle.map((title, idx) => (
              <li className="text-[#1c1b1b99] text-base font-normal" key={idx}>
                {title.title}
              </li>
            ))}
          </ol>
        </div>
      </h2>
      <hr className="mt-4 mb-4 border-[1px]" />
      <p className="text-base font-medium">Total Credit Hour :</p>
      <hr className="mt-4 mb-4 border-[1px]" />
      <p className="text-base font-semibold">Total Credit Hour : USD</p>
    </div>
  );
};

CourseCalculations.propTypes = {
  courseTitle: PropTypes.array.isRequired,
};

export default CourseCalculations;
