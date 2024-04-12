import BlogForm from "../components/BlogForm";

const BlogPage = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-12 my-4">Create Blog</h1>
      <BlogForm blog={null} type="create" />
    </>
  );
};

export default BlogPage;
