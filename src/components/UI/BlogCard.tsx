const BlogCard = ({ data }: any) => {
  return (
    <div className="bg-white rounded-md border shadow px-3 pt-3 pb-5 m-2">
      <div className="pl-14">
        <div className="flex items-center relative -left-11">
          <div className="bg-slate-500 rounded-full w-9 h-9 mr-2"></div>
          <div className="flex flex-col justify-center">
            <h5 className="mb-0.5 p-0">{data?.user}</h5>
            <p className="m-0 text-sm text-gray-400">{data?.data}</p>
          </div>
        </div>
        <a className="text-2xl pt-4 pb-2 block font-bold hover:text-blue-700 leading-[23px]">
          {data?.title}
        </a>
        <div className="mb-4">
          {
            data?.tags?.map((tag:string) => (
              <a key={tag} className="text-slate-500 text-sm rounded py-1 px-1.5 hover:border hover:bg-slate-50 cursor-pointer">#{tag}</a>
            ))
          }
        </div>

        <div className="flex justify-between items-center relative -left-2">
          <div className="flex">
            <button className="flex items-center text-slate-500 text-sm hover:bg-slate-100 rounded-lg py-1 px-2 mr-2">
              <svg
                className="mr-1 fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                role="img"
                aria-labelledby="a3w6a0fey3vforbqyqohlsiwl00w55tk"
              >
                <title id="a3w6a0fey3vforbqyqohlsiwl00w55tk">Reactions</title>
                <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
              </svg>
              {data?.likes} Reactions
            </button>
            <button className="flex items-center text-slate-500 text-sm hover:bg-slate-100 rounded-lg py-1 px-2">
              <svg
                className="mr-1 fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                role="img"
                aria-labelledby="aloql9tkuz1fcbj7557dmq2fh846gjrw"
              >
                <title id="aloql9tkuz1fcbj7557dmq2fh846gjrw">Comments</title>
                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
              </svg>
              {data?.comments} Comments
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-slate-600 m-0 mr-1 text-sm">1 min read</p>
            <button className="flex items-center text-slate-500 hover:bg-slate-100 rounded-lg py-1 px-2">
              <svg
                className="crayons-icon c-btn__icon"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
