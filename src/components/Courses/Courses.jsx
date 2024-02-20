import { useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    return (
        <div className='courses-container'>
            <div className='single-courses'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }

            </div>
            <div>
                <h3>Course info after click hare</h3>
            </div>
        </div>

    );
};

export default Courses;