import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Blogs from "./Blogs";
import Footer from "../Footer/Footer";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-10">
        {blogs.map((blog) => (
          <Blogs key={blog.id} blog={blog}></Blogs>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogsPage;
