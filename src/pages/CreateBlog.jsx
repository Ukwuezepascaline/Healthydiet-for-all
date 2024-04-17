/* 
Title: Input
Image: Input
overview: TextArea
Description: TextArea
*/

const BlogForm = () => {
  return (
    <>
      <h1>Create Blog</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 items-start justify-start">
          <label>Title</label>
          <input type="text" placeholder="Blog title" />
        </div>
        <div className="flex flex-col gap-1 items-start justify-start">
          <label>Image</label>
          <input type="url" placeholder="https://facebook.com" />
        </div>
        <div className="flex flex-col gap-1 items-start justify-start">
          <label>Overview</label>
          <textarea rows={5} placeholder="Please enter the blog overview" />
        </div>
        <div className="flex flex-col gap-1 items-start justify-start">
          <label>Description</label>
          <textarea rows={10} placeholder="please enter details" />
        </div>
      </form>
    </>
  );
};

export default BlogForm;
