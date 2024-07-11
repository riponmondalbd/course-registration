import { useState } from "react";
import CourseCalculations from "./components/CourseCalculations/CourseCalculations";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);
  const [courseHourse, SetCourseHour] = useState(0);

  const handleSelect = (course) => {
    console.log("click select", course);
    // add course name
    setCourseTitle([...courseTitle, course]);
  };
  return (
    <>
      <Header />
      <div className="container mx-auto flex-col-reverse flex md:flex-row gap-6">
        <Courses handleSelect={handleSelect} />
        <CourseCalculations courseTitle={courseTitle} />
      </div>
    </>
  );
}

export default App;
