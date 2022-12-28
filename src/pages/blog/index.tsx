import BlogCard from "../../components/UI/BlogCard";
import TagBlogList from "../../components/UI/TagBlogList";

const tagList = [
  "react",
  "angular",
  "bash",
  "typescript",
  "javascript",
  "electon",
  "python",
  "network",
  "popular",
  "react",
];

const blogCardData = [
  {
    user: "Mike Tyler",
    data: "Dec 26(10 hours ago)",
    title:
      "EKS Observability Infrastructure as Code - AWS Observability Accelerator",
    tags: ["react", "angular", "django", "aws"],
    likes: 34,
    comments: 56,
  },
  {
    user: "Monkey D. Luffy",
    data: "Jan 26",
    title: "OPPs Concepts",
    tags: ["react", "angular", "django", "aws"],
    likes: 34,
    comments: 56,
  },
  {
    user: "Naruto Uzimaki",
    data: "Mar 26(10 min ago)",
    title: "A Day When my Sole Rest",
    tags: ["react", "angular", "django", "aws"],
    likes: 34,
    comments: 56,
  },
  {
    user: "Mike Tyler",
    data: "Dec 26(10 hours ago)",
    title:
      "EKS Observability Infrastructure as Code - AWS Observability Accelerator",
    tags: ["react", "angular", "django", "aws"],
    likes: 34,
    comments: 56,
  },
  {
    user: "Mike Tyler",
    data: "Dec 26(10 hours ago)",
    title:
      "EKS Observability Infrastructure as Code - AWS Observability Accelerator",
    tags: ["react", "angular", "django", "aws"],
    likes: 34,
    comments: 56,
  },
];

const tagBlogList = [
  {
    tag: "react",
    blogs: [
      {
        title: "How to fuck",
        comments: 5,
      },
      {
        title: "AWS Stater Course Blog",
        comments: 2,
      },
      {
        title: "Go the Language in Trends",
        comments: 7,
      },
      {
        title: "How to fuck",
        comments: 5,
      },
      {
        title: "AWS Stater Course Blog",
        comments: 2,
      },
      {
        title: "Go the Language in Trends",
        comments: 7,
      },
    ],
  },
  {
    tag: "nature",
    blogs: [
      {
        title: "The Blog of Awsome",
        comments: 2,
      },
      {
        title: "Go the Language in Trends",
        comments: 7,
      },
      {
        title: "The nature of Truth",
        comments: 5,
      },
      {
        title: "AWS Stater Course Blog",
        comments: 2,
      },
      {
        title: "Go the Language in Trends",
        comments: 7,
      },
    ],
  },
];

export default function Blogs() {
  return (
    <div className="w-[1300px] mx-auto flex p-2 h-full overflow-auto">
      <div className="w-[200px]">
        <div>
          <h2>My Tags</h2>
          <ul className="list-none">
            {tagList.map((tag) => (
              <li key={tag}>
                <a className="px-4 py-3 rounded-md hover:bg-slate-300 block hover:underline hover:text-blue-800 cursor-pointer">
                  #{tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex">
          <button className="text-gray-600 text-xl p-2 mr-1 rounded hover:bg-white hover:text-blue-700">
            Relevent
          </button>
          <button className="text-gray-600 text-xl p-2 mr-1 rounded hover:bg-white hover:text-blue-700">
            Latest
          </button>
          <button className="text-gray-600 text-xl p-2 mr-1 rounded hover:bg-white hover:text-blue-700">
            Top
          </button>
        </div>
        <div>
          {blogCardData?.map((blog) => (
            <BlogCard data={blog} />
          ))}
        </div>
      </div>
      <div className="w-[300px]">
        {tagBlogList.map((data) => (
          <TagBlogList data={data} />
        ))}
      </div>
    </div>
  );
}
