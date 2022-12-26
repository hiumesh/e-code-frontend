import { Form, Input } from "antd";
import { useEffect, useState } from "react";

export interface TabItems {
  key: number;
  name: number;
}

interface TabsPropTypes {
  mode: "view" | "edit";
}

const TestCaseTabs = ({ mode }: TabsPropTypes) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // TODO
  }, []);
  return (
    <Form.List name="testCases">
      {(fields, { add, remove }) => (
        <div className="bg-white p-4">
          <div className="flex items-center">
            {fields.map(({ key, name, ...restFields }, idx) => (
              <button
                key={key}
                className={`relative group mr-2 my-2 py-1 px-4 flex items-center hover:bg-slate-200 ${
                  activeTab === name ? "bg-slate-200" : ""
                } rounded text-[#5C627C]`}
                onClick={() => {
                  console.log(name)
                  setActiveTab(name)
                }}
                type="button"
              >
                <div className="hidden group-hover:flex bg-transparent h-6 w-6 items-center justify-center absolute top-0 right-0 translate-x-[40%] -translate-y-[40%]">
                  <button
                    className="bg-slate-300 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full"
                    onClick={() => {
                      
                      remove(name)
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-white dark:text-dark-white h-2.5 w-2.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {`Case ${idx + 1}`}
              </button>
            ))}
            <button
              className="p-1 flex items-center justify-center hover:bg-slate-200 rounded text-[#5C627C]"
              onClick={() => {
                add()
                setActiveTab(fields.length)
              }}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            {fields.map(({ key, name, ...restFields }) => (
              <div
                key={key}
                className={`${activeTab === name ? "block" : "hidden"}`}
              >
                <Form.Item label="Input" name={[name, "case"]}>
                  <Input.TextArea />
                </Form.Item>
                {mode === 'view' && (
                  <>
                    <Form.Item label="Output" name={[name, "output"]}>
                      <Input.TextArea disabled />
                    </Form.Item>
                    <Form.Item label="Expected" name={[name, "expected"]}>
                      <Input.TextArea disabled />
                    </Form.Item>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Form.List>
  );
};

export default TestCaseTabs;
