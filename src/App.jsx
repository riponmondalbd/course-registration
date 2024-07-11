import { useState } from "react";
import CourseCalculations from "./components/CourseCalculations/CourseCalculations";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);
  const [courseHour, SetCourseHour] = useState(0);
  const [coursePrice, SetCoursePrice] = useState(0);
  const [hourCount, setHourCount] = useState(20);

  const handleSelect = (course) => {
    // add course name
    setCourseTitle([...courseTitle, course]);
    // add total course hours
    SetCourseHour(courseHour + course.time);
    // add course Price
    SetCoursePrice(coursePrice + course.price);
    // hour count
    setHourCount(hourCount - course.time);
  };

  if (hourCount < 0) {
    alert("YOU REACH YOUR LIMIT");
    return;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto flex-col-reverse flex md:flex-row gap-6">
        <Courses handleSelect={handleSelect} />
        <CourseCalculations
          courseTitle={courseTitle}
          courseHour={courseHour}
          coursePrice={coursePrice}
          hourCount={hourCount}
        />
      </div>
    </>
  );
}

export default App;
