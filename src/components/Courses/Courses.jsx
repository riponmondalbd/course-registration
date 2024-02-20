import { useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';
import Bookmarks from '../Bookmarks/Bookmarks';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    const handleAddToCourse = course => {
        const exist = bookmarks.find(courseName => courseName.id === course.id);
        let count = course.credit;
        let prices = course.price;

        if (exist) {
            alert('Item can only be added once!')
        }
        else {
            bookmarks.forEach(courseName => {
                count += courseName.credit;
                prices += courseName.price;
            })
            const totalRemaining = 20 - count;

            if (count > 20) {
                alert('OPS! You reach your limit')
            }
            else {
                setTotalHour(count);
                setTotalPrice(prices);
                setRemaining(totalRemaining);
                setBookmarks([...bookmarks, course]);
            }
        }
    }

    return (
        <div className='courses-container'>
            <div className='single-courses'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleAddToCourse={handleAddToCourse}
                    ></Course>)
                }

            </div>
            <div>
                <Bookmarks bookmarks={bookmarks} remaining={remaining} totalHour={totalHour} totalPrice={totalPrice}></Bookmarks>
            </div>
        </div>

    );
};

export default Courses;