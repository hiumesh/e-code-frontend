import { useState } from "react";
import Split from "react-split";
import { Tabs, Form } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import ProblemDescription from "../../components/problemDescription";
import TestCaseAndResult from "../../components/testCaseAndResult";
import CodeEditor from "../../components/CodeEditor";

export default function Problems() {
  const [console, setConsole] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    // TODO
  }

  return (
    <div className="h-[calc(100vh-60px)] bg-[#EEEEEE]">
      <Split className="flex h-full" sizes={[40,60]} minSize={[40,30]}>
        <div className="card-container h-full">
          <Tabs
            className="h-full bg-white tabs-border-remove"
            style={{ height: "100%" }}
            type="card"
            tabBarStyle={{ backgroundColor: "#EEEEEE", border: "none" }}
          >
            <Tabs.TabPane
              key="1"
              tab="Description"
              className="h-[calc(100vh-120px)]"
            >
              <ProblemDescription />
            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab="Discussion">
              Discussion
            </Tabs.TabPane>
            <Tabs.TabPane key="3" tab="Solutions">
              Solutions
            </Tabs.TabPane>
            <Tabs.TabPane key="4" tab="Submission">
              Submissions
            </Tabs.TabPane>
          </Tabs>
        </div>
        <Split
          direction="vertical"
          sizes={console ? [50, 50] : [95, 5]}
          minSize={[50, 5]}
        >
          <div className="">
            <CodeEditor />
          </div>
          <div className="relative bg-white">
            <Form
              form={form}
              layout="vertical"
              className="font-mono"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <TestCaseAndResult TestCases={[{Value: "234234"}, {Value: "234234"}, {Value: "234234"}]} />
            </Form>
            <div className="absolute bottom-0 bg-white h-[50px] w-full flex justify-between items-center">
              <button
                className="bg-[#E5E6E8] hover:bg-[#cfcfd1] text-[#596F9F] flex items-center ml-2 p-2 rounded-md"
                
                type="button"
                onClick={() => {
                  setConsole((prev) => !prev);
                }}
              >
                Console
                {console ? <DownOutlined className="ml-1" /> : <UpOutlined className="ml-1" />}
              </button>
              <div className="flex">
                <button
                  className="bg-[#E5E6E8] hover:bg-[#cfcfd1] text-[#596F9F] flex items-center ml-2  p-2 rounded-md"
                  type="button"
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
          </div>
        </Split>
      </Split>
    </div>
  );
}
