import { Form } from "antd";
import { useState } from "react";

import MarkdownPreview from "../../components/MarkdownPreview";
import UserBlogList from "../../components/UI/UserBlogList";
import CommentBox from "../../components/UI/CommentBox";
import Comments from "../../components/UI/Comments";

const sampleMarkdonw =
  "An h1 header\n============\n\n.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde cumque perspiciatis minima expedita ducimus et accusamus dolore ratione ipsa iste, totam a distinctio laudantium blanditiis tempore assumenda id nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, eius asperiores odio quibusdam fugit molestiae, ipsam eligendi nam non excepturi dignissimos cumque! Quia, voluptatum. Quibusdam nisi ipsam sint ab iusto.\nDeserunt eos magni fugit cumque atque nisi qui, fugiat voluptates soluta ullam quo numquam. Quibusdam rerum quas, odio atque tenetur eveniet ipsum esse accusantium, consequatur molestiae sapiente obcaecati modi nostrum?\nLaudantium quo sequi modi voluptatum architecto saepe facilis molestiae porro ducimus officia, iure ipsa eos minima? Tenetur officiis repudiandae impedit laboriosam dolorum cumque iusto facere sint recusandae. Commodi, minus iure?Maiores culpa cupiditate quaerat ullam maxime quia, mollitia magnam sapiente fugiat. Quod iusto cum eius! Exercitationem totam quas at molestiae minima ratione illo alias eos numquam, harum temporibus dignissimos doloremque.";

const userBlogList = {
  user: "Guillaume Duhan",
  blogs: [
    {
      title: "How to fuck?",
      tags: ["react", "aws", "django", "mongodb"],
    },
    {
      title: "AWS Stater Course Blog",
      tags: ["react", "aws", "django", "mongodb"],
    },
    {
      title: "Go the Language in Trends",
      tags: ["react", "aws", "django", "mongodb"],
    },
    {
      title: "How to fuck??",
      tags: ["react", "aws", "django", "mongodb"],
    },
    {
      title: "AWS Stater Course Blog?",
      tags: ["react", "aws", "django", "mongodb"],
    },
    {
      title: "Go the Language in Trends?",
      tags: ["react", "aws", "django", "mongodb"],
    },
  ],
};

export default function Blog() {
  const [form] = Form.useForm();
  const [viewMode, setViewMode] = useState("edit");

  return (
    <div className="w-[1300px] mx-auto flex items-stretch p-2 overflow-auto relative">
      <div className="mr-3 sticky top-0">
        <div className="flex flex-col items-center mb-3">
          <button className="flex items-center text-slate-500 text-sm hover:bg-red-100 group rounded-full p-2 mb-1">
            <svg
              className="fill-gray-700 group-hover:fill-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
            </svg>
          </button>
          <span className="text-gray-600">5</span>
        </div>
        <div className="flex flex-col items-center mb-3">
          <button className="flex items-center text-slate-500 text-sm hover:bg-orange-100 group rounded-full p-2 mb-1">
            <svg
              className="fill-gray-700 group-hover:fill-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
            </svg>
          </button>
          <span className="text-gray-600">5</span>
        </div>
        <div className="flex flex-col items-center mb-3">
          <button className="flex items-center text-slate-500 text-sm hover:bg-blue-100 group rounded-full p-2 mb-1">
            <svg
              className="fill-gray-700 group-hover:fill-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
            </svg>
          </button>
          <span className="text-gray-600">5</span>
        </div>
        <div className="flex flex-col items-center mb-3">
          <button className="flex items-center text-slate-500 text-sm hover:bg-blue-100 group rounded-full p-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              role="img"
              aria-labelledby="aq9xb72qy9ibelwvvie91283t8zjejf7"
              aria-hidden="true"
            >
              <title id="aq9xb72qy9ibelwvvie91283t8zjejf7">More...</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-md">
          <div className="bg-indigo-300 rounded-md overflow-hidden">
            <img
              className="object-cover h-[400px] w-full"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
            />
          </div>
          <div className="px-10 pt-8 mb-20">
            <div className="flex items-center">
              <div className="bg-slate-500 rounded-full w-9 h-9 mr-2"></div>
              <div className="flex flex-col justify-center">
                <h5 className="mb-0.5 p-0">Guillaume Duhan</h5>
                <p className="m-0 text-sm text-gray-400">Posted on 26 Dec</p>
              </div>
            </div>
            <h1 className="text-7xl pt-4 pb-2 block font-bold">
              Design system with Tailwindcss
            </h1>

            <MarkdownPreview text={sampleMarkdonw} />
          </div>
          <hr className="mb-5"></hr>
          <div className="px-10">
            <h1 className="text-3xl mb-9 font-bold">Top Comments (3)</h1>
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-400 mr-3"></div>
              <Form form={form} className="flex-1">
                <Form.Item
                  name="Comment"
                  className="mb-2"
                  hidden={viewMode === "preview"}
                  shouldUpdate={true}
                  rules={[{ required: true }]}
                >
                  <CommentBox
                    setText={(value) => form.setFieldValue("Comment", value)}
                  />
                </Form.Item>
                {viewMode === "preview" && (
                  <div className="p-3 rounded-md border mb-2 min-h-[250px]">
                    <MarkdownPreview text={form?.getFieldValue("Comment")} />
                  </div>
                )}

                <div className="flex items-center">
                  <button
                    type="submit"
                    className="py-2 px-3 text-white bg-blue-600 rounded-md mr-4"
                  >
                    Submit
                  </button>
                  {viewMode === "edit" ? (
                    <button
                      type="button"
                      className="py-2 px-3 text-black bg-gray-200 rounded-md"
                      onClick={() => setViewMode("preview")}
                    >
                      Preview
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="py-2 px-3 text-black bg-gray-200 rounded-md"
                      onClick={() => setViewMode("edit")}
                    >
                      Continue Editing
                    </button>
                  )}
                </div>
              </Form>
            </div>
            <Comments subComments={[1,2,3]} />
          </div>
        </div>
      </div>
      <div className="w-[400px] sticky top-0">
        <div className="overflow-hidden rounded-md mx-3 mb-3 bg-[#FAFAFA]">
          <div className="h-7 bg-black"></div>
          <div className="relative -top-4 mx-4 mb-4">
            <div className="flex items-end">
              <div className="bg-slate-500 rounded-full w-12 h-12 mr-2"></div>
              <div className="flex flex-col justify-end">
                <h5 className="mb-0.5 p-0 text-lg">Guillaume Duhan</h5>
              </div>
            </div>
            <button className="rounded bg-blue-800 text-white text-lg w-full p-1.5 flex justify-center items-center my-2">
              Follow
            </button>
            <p className="text-gray-500">Co founder Of Microsoft</p>
            <h4 className="text-sm m-0 p-0">WORK</h4>
            <p className="text-gray-500">Full Stack Web Developer</p>
            <h4 className="text-sm m-0 p-0">JOINED</h4>
            <p className="text-gray-500">13 Jan 2002</p>
          </div>
        </div>
        <div className="mx-3">
          <UserBlogList data={userBlogList} />
        </div>
      </div>
    </div>
  );
}
