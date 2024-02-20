import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css';
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, remaining, totalHour, totalPrice }) => {
    return (
        <div>
            <h3>Credit Hour Remaining  {remaining}hr</h3>
            <h2>Course Name</h2>
            <hr />
            <ol>
                {bookmarks.map((bookmark, idx) => (
                    <li key={idx}>
                        <Bookmark bookmark={bookmark} />
                    </li>
                ))}
            </ol>
            <hr />
            <h3>Total Credit Hours: {totalHour}</h3>
            <hr />
            <h3>Total Price: {totalPrice}USD</h3>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;