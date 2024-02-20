import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './Course.css';
import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const { image, course_name, details, price, credit } = course;
    return (
        <div className='single-course'>
            <div className='course-title-description'>
                <img src={image} alt="" />
                <h4 className='course-name'>{course_name}</h4>
                <p className='course-details'>{details}</p>
            </div>
            <div className='price-credit'>
                <span className='course-price'><p><FontAwesomeIcon icon={faDollarSign} />  Price: {price}</p></span>
                <span><p><FontAwesomeIcon icon={faBookOpen} />  Credit: {credit}hr</p></span>
            </div>
            <button className='select-button'>Select</button>
        </div>

    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;