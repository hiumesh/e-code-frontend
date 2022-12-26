import { useState } from "react";
import Split from "react-split";
import { Tabs, Form } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import ProblemDescription from "../../components/problemDescription";
import CodeEditor from "../../components/CodeEditor";
import TestCaseTabs from "../../components/TestCaseTabs";

export default function Problems() {
  const [resultConsole, setResultConsole] = useState<boolean>(false);
  const [testCaseTab, setTestCaseTab] = useState<"testCase" | "result">(
    "testCase"
  );
  const [mainTab, setMainTab] = useState<
    "description" | "submission" | "solution" | "discussion"
  >("description");
  const [form] = Form.useForm();

  const onFinish = (data: any) => {
    console.log(data);
  };

  return (
    <div className="h-[calc(100vh-60px)] bg-[#EEEEEE]">
      <Split className="flex h-full" sizes={[40, 60]} minSize={[40, 30]}>
        <div className="card-container h-full flex flex-col">
          <div className="h-[38px]">
            <ul className="flex flex-wrap h-full m-0 text-sm font-medium text-center text-gray-500 border-gray-200">
              <li className="mr-2">
                <button
                  type="button"
                  aria-current="page"
                  className={`h-full inline-block p-2 px-5 rounded-t-lg ${mainTab === "description" ? "bg-white text-blue-600" : ""}`}
                  onClick={() => setMainTab('description')}
                >
                  Description
                </button>
              </li>
              <li className="mr-2">
                <button
                  type="button"
                  className={`h-full inline-block p-2 px-5 rounded-t-lg ${mainTab === "discussion" ? "bg-white text-blue-600" : ""}`}
                  onClick={() => setMainTab('discussion')}
                >
                  Discussion
                </button>
              </li>
              <li className="mr-2">
                <button
                  type="button"
                  className={`h-full inline-block p-2 px-5 rounded-t-lg ${mainTab === "solution" ? "bg-white text-blue-600" : ""}`}
                  onClick={() => setMainTab('solution')}
                >
                  Solution
                </button>
              </li>
              <li className="mr-2">
                <button
                  type="button"
                  className={`h-full inline-block p-2 px-5 rounded-t-lg ${mainTab === "submission" ? "bg-white text-blue-600" : ""}`}
                  onClick={() => setMainTab('submission')}
                >
                  Submission
                </button>
              </li>
              
            </ul>
          </div>
          <div className="bg-white h-[calc(100%-38px)] w-full">
            <div className={`h-full overflow-auto pt-2 ${mainTab === "description" ? "block" : "hidden"}`}>
              <ProblemDescription />
            </div>
            <div className={`h-full overflow-auto pt-2 ${mainTab === "discussion" ? "block" : "hidden"}`}>
              Disscussion
            </div>
            <div className={`h-full overflow-auto pt-2 ${mainTab === "solution" ? "block" : "hidden"}`}>
              Solution
            </div>
            <div className={`h-full overflow-auto pt-2 ${mainTab === "submission" ? "block" : "hidden"}`}>
              Submission
            </div>
          </div>

         
        </div>
        <Split
          direction="vertical"
          sizes={resultConsole ? [50, 50] : [95, 5]}
          minSize={[50, 5]}
        >
          <div className="">
            <CodeEditor />
          </div>
          <div className="relative bg-white">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mx-4">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <button
                    type="button"
                    onClick={() => setTestCaseTab("testCase")}
                    className={`inline-block p-2 rounded-t-lg border-b-2 ${
                      testCaseTab === "testCase"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    Test Case
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    type="button"
                    onClick={() => setTestCaseTab("result")}
                    className={`inline-block p-2 rounded-t-lg border-b-2 ${
                      testCaseTab === "result"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                    }`}
                    aria-current="page"
                  >
                    Result
                  </button>
                </li>
              </ul>
            </div>
            <div className="overflow-auto">
              <Form
                form={form}
                layout="vertical"
                className="font-mono"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <TestCaseTabs
                  mode={testCaseTab === "result" ? "view" : "edit"}
                />
                <div className="absolute bottom-0 bg-white h-[50px] w-full flex justify-between items-center border-t-2">
                  <button
                    className="bg-[#E5E6E8] hover:bg-[#cfcfd1] text-[#596F9F] flex items-center ml-2 p-2 rounded-md"
                    type="button"
                    onClick={() => {
                      setResultConsole((prev) => !prev);
                    }}
                  >
                    
                    Console
                    {resultConsole ? (
                      <DownOutlined className="ml-1" />
                    ) : (
                      <UpOutlined className="ml-1" />
                    )}
                  </button>
                  <div className="flex">
                    <button
                      className="bg-[#E5E6E8] hover:bg-[#cfcfd1] text-[#596F9F] flex items-center ml-2  p-2 rounded-md"
                      type="submit"
                    >
                      Run
                    </button>
                    <button
                      className="bg-[#29a153] hover:bg-[#2DB55D] text-white flex items-center ml-2 mr-2  p-2 rounded-md"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Split>
      </Split>
    </div>
  );
}
