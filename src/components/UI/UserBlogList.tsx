const UserBlogList = ({ data }: any) => {
  return (
    <div className="bg-[#FAFAFA] rounded-md my-2">
      <h1 className="p-2 border-b m-0 text-2xl">
        More from <span className="text-blue-700">{data?.user}</span>
      </h1>
      <ul className="m-0 p-0">
        {data?.blogs?.map((blog: any) => (
          <li key={blog?.title}>
            <a className="hover:bg-white px-3 py-4 border-b block group">
              <p className="p-0 mb-1 group-hover:text-blue-700">
                {blog?.title}
              </p>
              <div>
                {blog?.tags?.map((tag: any) => (
                  <span key={tag} className="text-sm mr-2 text-gray-600 hover:text-gray-700">#{tag}</span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBlogList;
