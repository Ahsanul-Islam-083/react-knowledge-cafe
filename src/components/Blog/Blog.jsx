import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAssRead }) => {
    const { title, cover_img, reading_time, author_img, author, posted_date, hashtags, } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-md' src={cover_img} alt={`Cover image of the ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <div className='w-14 h-14'><img className='w-full h-full rounded-full' src={author_img} alt="" /></div>
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-gray-400 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-xl text-gray-400 font-medium'>
                    <span>{reading_time} min read</span>
                    {/* <button><FaBeer /></button> */}
                    <button onClick={() => handleAddToBookmark(blog)} title='Add to bookmark' className='ml-2 text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='text-xl text-gray-400 font-medium'>
                {
                    hashtags.map((hash, idx) => <span className='mr-2' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAssRead(reading_time)} className='text-xl font-semibold text-purple-600 underline mt-3'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAssRead: PropTypes.func
}

export default Blog;