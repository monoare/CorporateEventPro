const Blogs = ({ blog }) => {
  const { id, image_url, title, author, publication_date, tags, content } =
    blog;
  const paragraphs = content.split("\n\n");
  return (
    <div className="px-4 md:px-10 lg:px-0 lg:w-2/3 mx-auto">
      <div className="font-raleway mb-10 block">
        <div>
          <p className="md:text-2xl max-w-fit mb-4 font-semibold text-green-700">
            Topic-{id}: {title}
          </p>
        </div>
        <div>
          <img src={image_url} alt="" />
        </div>
        <div className="mt-4 text-sm md:text-base">
          <span className="mt-4">
            <span>Author Name: {author}, </span>
            <span>Publication date: {publication_date}, </span>
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
                {index < tags.length - 1 ? " || " : ""}
              </span>
            ))}
          </span>
          <p className="mt-4 text-sm md:text-base text-justify">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
