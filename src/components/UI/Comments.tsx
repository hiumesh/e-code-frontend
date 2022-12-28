import { Form } from "antd";
import { useState } from "react";

import MarkdownPreview from "../MarkdownPreview";
import CommentBox from "./CommentBox";

interface CommentsPropTypes {
  subComments: number[],
}

const Comments = ({ subComments }: CommentsPropTypes) => {
  const [form] = Form.useForm();
  const [reply, setReply] = useState(false);
  return (
    <div className="flex my-5">
      <div className="w-12 h-12 rounded-full bg-gray-400 mr-3"></div>
      <div className="flex-1">
        <div className="p-3 rounded-md border mb-2 min-h-[150px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-3 leading-[100%]">Tarush Gill</span>
              <span className="text-sm text-gray-600">27 Dec</span>
            </div>
            <button className="p-1 rounded-full hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a3n0klfluco7dymju2zvyigmxlre223w"
              >
                <title id="a3n0klfluco7dymju2zvyigmxlre223w">
                  Dropdown menu
                </title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                ></path>
              </svg>
            </button>
          </div>
          <MarkdownPreview text="Thsis is comment" />
        </div>
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
            Like
          </button>
          <button
            className="flex items-center text-slate-500 text-sm hover:bg-slate-100 rounded-lg py-1 px-2"
            onClick={() => setReply(true)}
          >
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
            Reply
          </button>
        </div>
        {reply && (
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-gray-400 mr-3"></div>
            <Form form={form} className="flex-1">
              <Form.Item
                name="Comment"
                className="mb-2"
                shouldUpdate={true}
                rules={[{ required: true }]}
              >
                <CommentBox
                  setText={(value) => form.setFieldValue("Comment", value)}
                />
              </Form.Item>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="py-2 px-3 text-white bg-blue-600 rounded-md mr-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="py-2 px-3 text-black bg-slate-200 rounded-md"
                  onClick={() => setReply(false)}
                >
                  Dismiss
                </button>
              </div>
            </Form>
          </div>
        )}
        {
          subComments?.map((comment) => <Comments subComments={[]} key={comment} />)
        }
      </div>
    </div>
  );
};

export default Comments;
