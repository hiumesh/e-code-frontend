import { Form, Input, Select, Button, Radio, Upload, Tabs, Modal } from "antd";
import { useState } from "react";
import Quill from "../quill";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";

interface FormData {
  SolutionMethod: "MANUALLY" | "FILE" | null;
  TestCaseMethod: "MANUALLY" | "FILE" | null;
}

interface TestCase {
  key: number;
  name: string;
  value: string;
}
const initialTestCaseItems = [
  { key: 1, name: "Test Case 1", value: "" },
  { key: 2, name: "Test Case 2", value: "" },
  { key: 3, name: "Test Case 3", value: "" },
];

export default function ProblemForm() {
  const [form] = Form.useForm();
  const [solutionUploadMode, setSolutionUploadMode] = useState<string | null>(
    null
  );
  const [testCaseUploadMode, setTestCaseUploadMode] = useState<string | null>(
    null
  );
  const [testCases, setTestCases] = useState<TestCase[]>(initialTestCaseItems);
  const [discriptionModal, setDiscriptionModal] = useState(false);
  const onFinish = (data:any) => {
    console.log(data);
    // TODO
  };
  const onValuesChange = ({ SolutionMethod, TestCaseMethod }: FormData) => {
    if (SolutionMethod) setSolutionUploadMode(SolutionMethod);
    if (TestCaseMethod) setTestCaseUploadMode(TestCaseMethod);
  };
  const onEdit = (targetKey: string, action: "add" | "remove") => {
    if (action === "add") {
      const newTestCases = [...testCases];
      newTestCases.push({
        key: new Date().getTime(),
        name: `Test Case ${newTestCases.length + 1}`,
        value: "",
      });
      setTestCases(newTestCases);
    } else {
      const newTestCases = testCases.filter(
        (t) => t.key.toString() != targetKey
      );
      setTestCases(newTestCases);
    }
  };

  const setQuillData = (data: any) => {
    console.log(data);
    form.setFieldValue("Discription", data);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      autoComplete="off"
    >
      <div className="flex">
        <Form.Item
          label="Title"
          name="title"
          className="flex-1 mr-2"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Tags"
          name="tags"
          className="flex-1 ml-2"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Select
            mode="tags"
            size="large"
            placeholder="Please select"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </div>
      <div className="flex">
        <Form.Item
          label="Difficulty"
          name="Difficulty"
          className="flex-1 mr-2"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="Select Compines"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            size="large"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Compaines"
          name="Compaines"
          className="flex-1 ml-2"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            mode="tags"
            placeholder="Select Compines"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            size="large"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Form.Item>
      </div>
      <Form.Item name="Discription" label="Discription">
        <Button
          type="dashed"
          onClick={() => setDiscriptionModal(true)}
          icon={<PlusOutlined />}
        >
          Add Description
        </Button>
      </Form.Item>

      <Form.Item
        label="Solution Language"
        name="SolutionLanguage"
        className="flex-1 mr-2"
        rules={[{ required: true }]}
      >
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Solution Method"
        name="SolutionMethod"
        rules={[{ required: true }]}
      >
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="MANUALLY">Manually</Radio.Button>
          <Radio.Button value="FILE">File</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {solutionUploadMode === "MANUALLY" && (
        <Form.Item
          label="Solution"
          name="ManuallySolution"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            placeholder="Enter Code"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
      )}
      {solutionUploadMode === "FILE" && (
        <Form.Item
          label="Solution"
          name="FileSolution"
          rules={[{ required: true }]}
        >
          <Upload.Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">.txt file supported</p>
          </Upload.Dragger>
        </Form.Item>
      )}

      <Form.Item
        label="Test Case Method"
        name="TestCaseMethod"
        rules={[{ required: true }]}
      >
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="MANUALLY">Manually</Radio.Button>
          <Radio.Button value="FILE">File</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {testCaseUploadMode === "MANUALLY" && (
        <Form.List name="ManuallyTestCases">
          {(fields, { add, remove }) => (
            <Tabs
              type="editable-card"
              onEdit={(key, action) => {
                console.log(typeof key);
                if (action === "add") add();
                else remove(key as unknown as number);
              }}
              items={fields.map(({ key, ...restField }, idx) => ({
                label: `Test Case ${idx}`,
                key: key,
                children: (
                  <Form.Item {...restField} className="h-full">
                    <Input.TextArea
                      placeholder="Enter Code"
                      className="h-full"
                      autoSize={{ minRows: 9, maxRows: 9 }}
                    />
                  </Form.Item>
                ),
              }))}
            />
          )}
        </Form.List>
      )}

      {testCaseUploadMode === "FILE" && (
        <Form.Item
          label="TestCase"
          name="FileTestCase"
          rules={[{ required: true }]}
        >
          <Upload.Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">.txt file supported</p>
          </Upload.Dragger>
        </Form.Item>
      )}
      <Quill
        discriptionModal={discriptionModal}
        setDiscriptionModal={setDiscriptionModal}
        setQuillData={setQuillData}
      />
      <div>
        <Button type="default" htmlType="submit" className="mr-3">
          Reset
        </Button>
        <Button className="bg-[#1677FF]" type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
