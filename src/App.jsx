import CourseCalculations from "./components/CourseCalculations/CourseCalculations";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex-col-reverse flex md:flex-row gap-6">
        <Courses />
        <CourseCalculations />
      </div>
    </>
  );
}

export default App;
