import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    const { course_name } = bookmark;
    return (
        <div>
            <div>
                <p>{course_name}</p>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;