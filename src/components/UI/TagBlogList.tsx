const TagBlogList = ({data}:any) => {
  return (
    <div className="bg-[#FAFAFA] rounded-md my-2">
      <h1 className="p-2 border-b m-0 text-xl">#{data?.tag}</h1>
      <ul className="m-0 p-0">
        {
          data?.blogs?.map((blog:any) => (<li key={blog?.title}>
          <a className="hover:bg-white px-3 py-4 border-b block group">
            <p className="p-0 mb-1 group-hover:text-blue-700">{blog?.title}</p>
            <span className="text-sm text-gray-400 group-hover:text-gray-700">{blog?.comments} Comments</span>
          </a>
        </li>))
        }
      </ul>
    </div>
  )
}

export default TagBlogList;
