import { Button, Tag } from "antd";
import { PageTypes } from "../page";
import { hostURl } from "../../api";

const DifficultyTags = (type: string, text: string) => {
  if (type === "HARD") return <Tag color="red">{text}</Tag>;
  else if (type === "EASY") return <Tag color="green">{text}</Tag>;
  else return <Tag color="orange">{text}</Tag>;
};

interface ProblemTablePropTypes {
  pages: { loading: boolean; data: PageTypes[] | [] };
  setFormDrawer: (data: {
    editData: PageTypes | null;
    visible: boolean;
  }) => void;
}

export default function ProblemTable({
  pages,
  setFormDrawer,
}: ProblemTablePropTypes) {
  return (
    <div className="flex-1 overflow-auto">
      {pages.data.map((page) => (
        <div key={page.Id} className="bg-white rounded-lg shadow-1 hover:shadow-xl md:flex my-3 mx-2">
          <img
            src={`${hostURl}/static/${page.CoverImage}`}
            alt="image"
            className="object-cover h-56 w-72 rounded-l-lg"
          />
          <div className="p-6 flex flex-col flex-1">
            <div className="flex-1 flex justify-between items-start">
              <div>
                <a href="#">
                  <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {page.Title}
                  </h5>
                </a>
                <p>
                  {page.BTags.map((tag) => (
                    <Tag key={tag.Id} className="text-base">{tag.Name}</Tag>
                  ))}
                </p>
              </div>
              <div className="flex items-center">
                <Tag className="text-sm" color="blue">
                  {page.Status}
                </Tag>
                <Button
                  onClick={() =>
                    setFormDrawer({ editData: page, visible: true })
                  }
                  type="link"
                >
                  Edit
                </Button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <button className="flex items-center text-slate-500 hover:bg-slate-100 rounded-lg py-1 px-2">
                    <svg
                      className="mr-1 fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      role="img"
                      aria-labelledby="a3w6a0fey3vforbqyqohlsiwl00w55tk"
                    >
                      <title id="a3w6a0fey3vforbqyqohlsiwl00w55tk">
                        Reactions
                      </title>
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    49 Reactions
                  </button>
                  <button className="flex items-center text-slate-500 hover:bg-slate-100 rounded-lg py-1 px-2">
                    <svg
                      className="mr-1 fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      role="img"
                      aria-labelledby="aloql9tkuz1fcbj7557dmq2fh846gjrw"
                    >
                      <title id="aloql9tkuz1fcbj7557dmq2fh846gjrw">
                        Comments
                      </title>
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    12 Comments
                  </button>
                </div>
                <div>
                  <p className="text-slate-600 m-0">
                    {new Date(page.createdAt).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
