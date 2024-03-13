
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 p-1'>
            <div className='p-4 rounded-lg bg-purple-100 border-2 border-purple-300'>
                <h3 className='text-2xl text-center text-purple-600 font-bold'>Spent time on read : {readingTime}</h3>
            </div>
            <div className=" bg-gray-100 mt-2 p-4 rounded-lg">
                <h2 className=" text-2xl font-bold text-center">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks