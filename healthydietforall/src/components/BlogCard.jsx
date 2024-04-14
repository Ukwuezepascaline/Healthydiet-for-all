/* eslint-disable react/prop-types */
import { convertStringToDate } from "../utils";

const BlogCard = ({ blog }) => {
  return (
    <div id="left_card" className="flex rounded-md ml-12 shadow-lg">
      <img
        src={blog.imageUrl}
        alt="left_image"
        className="w-64 h-64 pt-6 pl-4 pb-4 pr-4"
      />
      <div>
        <h3 className="text-2xl pt-6">{blog.title}</h3>
        <p className="mb-6 text-xs">{convertStringToDate(blog.createdAt)}</p>
        <p className="mb-7 pr-8 text-sm">{blog.overview}</p>
        <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
