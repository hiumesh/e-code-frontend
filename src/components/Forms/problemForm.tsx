import { Form, Input, Select, Button, Radio, Upload, Tabs } from "antd";
import { useState, useEffect, ReactNode, useContext } from "react";
import { NotificationContext } from "../../context/notificationProvider";
import Quill from "../quill";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { api } from "../../api";
import { Delta } from "types-quill-delta";
import axios from "axios";

interface FormData {
  SolutionMethod: "MANUALLY" | "FILE" | null;
  TestCaseMethod: "MANUALLY" | "FILE" | null;
}

interface TabTypes {
  key: string;
  label: string;
  children: ReactNode;
}
const difficultyItems = [
  { name: "Hard", value: "HARD" },
  { name: "Medium", value: "MEDIUM" },
  { name: "Easy", value: "EASY" },
];

export default function ProblemForm() {
  const [form] = Form.useForm();
  const openNotificationWithIcon = useContext(NotificationContext);
  const [tags, setTags] = useState({ loading: false, data: [] });
  const [languages, setLanguages] = useState({ loading: false, data: [] });
  const [compaines, setCompaines] = useState({ loading: false, data: [] });
  const [category, setCategory] = useState({ loading: false, data: [] });
  const [quillDataState, setQuillDataState] = useState<Delta | null>(null)
  const [loading, setLoading] = useState(false);
  const [solutionUploadMode, setSolutionUploadMode] = useState<string | null>(
    null
  );
  const [testCaseUploadMode, setTestCaseUploadMode] = useState<string | null>(
    null
  );
  const [showDiscriptionModal, setShowDiscriptionModal] = useState(false);

  const onFinish = (data: any) => {
    if (
      data["TestCaseMethod"] === "MANUALLY" &&
      (data["ManuallyTestCases"] === undefined ||
        data["ManuallyTestCases"].length < 3)
    ) {
      openNotificationWithIcon(
        "error",
        "Minimum Three Test Cases are Required"
      );
    } else {
      setLoading(true);
      api
        .post("problem/create", data)
        .then((res) => {
          setLoading(false);
          openNotificationWithIcon("success", "Problem Created Successfully");
        })
        .catch((err) => {
          setLoading(false);
          openNotificationWithIcon("error", err?.message);
        })
    } 
  };
  const onValuesChange = ({ SolutionMethod, TestCaseMethod }: FormData) => {
    if (SolutionMethod) setSolutionUploadMode(SolutionMethod);
    if (TestCaseMethod) setTestCaseUploadMode(TestCaseMethod);
  };

  const setQuillData = (data: any) => {
    console.log(data);
    form.setFieldValue("Description", data);
  };

  useEffect(() => {
    const apiPromises = [
      api.get("/language/getAll?cid=1"),
      api.get("/tag/getAll?cid=1"),
      api.get("/company/getAll"),
      api.get("/category/get")
    ]

    axios.all(apiPromises)
      .then((res) => {
        setLanguages({
          data: res[0].data.data?.map((x: { Name: string; Id: number }) => ({
            label: x.Name,
            value: x.Id,
          })),
          loading: false,
        });
        setTags({
          data: res[1].data.data?.map((x: { Name: string; Id: number }) => ({
            label: x.Name,
            value: x.Id,
          })),
          loading: false,
        });
        setCompaines({
          data: res[2].data.data?.map((x: { Name: string; Id: number }) => ({
            label: x.Name,
            value: x.Id,
          })),
          loading: false,
        });
        setCategory({
          data: res[3].data.data?.map((x: { Name: string; Id: number }) => ({
            label: x.Name,
            value: x.Id,
          })),
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err)
        setLanguages({ ...languages, loading: false });
        setTags({ ...tags, loading: false });
        setCompaines({ ...compaines, loading: false });
        setCategory({ ...category, loading: false });
      })

    setQuillDataState(form.getFieldValue('Description'))
  }, []);
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
          name="Name"
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
            loading={tags.loading}
            options={tags.data}
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
            placeholder="Select Difficulty"
            optionFilterProp="children"
            size="large"
            options={difficultyItems}
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
            size="large"
            loading={compaines.loading}
            options={compaines.data}
          />
        </Form.Item>
      </div>
      <div className="flex">
        <Form.Item
          label="Category"
          name="CategoryId"
          className="flex-1 mr-2"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="Select Categories"
            optionFilterProp="children"
            size="large"
            loading={category.loading}
            options={category.data}
          />
        </Form.Item>
        <Form.Item
          name="Description"
          label="Description"
          className="flex-1 ml-2"
        >
          <Button
            type="dashed"
            size="large"
            className="flex items-center"
            onClick={() => setShowDiscriptionModal(true)}
            icon={<PlusOutlined />}
          >
            Add Description
          </Button>
        </Form.Item>
      </div>

      <Form.Item
        label="Solution Language"
        name="SolutionLanguage"
        className="flex-1 mr-2"
        rules={[{ required: true }]}
      >
        <Select
          showSearch
          placeholder="Select a Language"
          optionFilterProp="children"
          loading={languages.loading}
          options={languages.data}
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
          name="SolutionCode"
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
                else
                  remove(
                    typeof key === "number" ? key : parseInt(key as string)
                  );
              }}
              items={
                fields.map(({ ...restField }, idx) => ({
                  label: `Test Case ${idx}`,
                  key: idx,
                  children: (
                    <Form.Item
                      {...restField}
                      rules={[{ required: true }]}
                      className="h-full"
                    >
                      <Input.TextArea
                        placeholder="Enter Code"
                        className="h-full"
                        autoSize={{ minRows: 9, maxRows: 9 }}
                      />
                    </Form.Item>
                  ),
                })) as unknown as TabTypes[] | undefined
              }
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
        quillData={quillDataState || null}
        discriptionModal={showDiscriptionModal}
        setDiscriptionModal={setShowDiscriptionModal}
        setQuillData={setQuillData}
      />
      <div>
        <Button type="default" htmlType="submit" className="mr-3">
          Reset
        </Button>
        <Button
          className="bg-[#1677FF]"
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
