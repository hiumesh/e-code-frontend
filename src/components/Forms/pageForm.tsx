import { Form, Input, Select, Button } from "antd";
import { useState, useEffect, ReactNode, useContext } from "react";
import { NotificationContext } from "../../context/notificationProvider";
import { api, hostURl } from "../../api";
import { PageTypes } from "../page";
import Markdown from "../MarkdownEditor";
import MarkdownPreview from "../MarkdownPreview";
import axios from "axios";

interface FormData {
  SolutionMethod: "MANUALLY" | "FILE" | null;
  TestCaseMethod: "MANUALLY" | "FILE" | null;
}

interface PageFormPropTypes {
  editData: PageTypes | null;
  fetchTableData: () => {};
  hideFormDrawer: () => void;
}

export default function PageForm({
  editData,
  fetchTableData,
  hideFormDrawer,
}: PageFormPropTypes) {
  const [form] = Form.useForm();
  const openNotificationWithIcon = useContext(NotificationContext);
  const [tags, setTags] = useState<{
    loading: boolean;
    data: [];
  }>({ loading: false, data: [] });
  const [coverImage, setCoverImage] = useState<{
    loading: boolean;
    src: null | string;
    fileName: string | null,
  }>({ loading: false, src: null, fileName: null });
  const [viewMode, setViewMode] = useState("edit");
  const [previewHTML, setPreviewHTML] = useState<{
    loading: boolean;
    html: string | null;
  }>({ loading: false, html: null });
  const [loading, setLoading] = useState(false);

  const onFinish = (data: any) => {
    setLoading(true);
    if (editData) {
      api
        .post("blog/update", { Id: editData.Id, ...data })
        .then(() => {
          setLoading(false);
          openNotificationWithIcon("success", "Blog Updated Successfully");
          fetchTableData();
          hideFormDrawer();
        })
        .catch((err) => {
          setLoading(false);
          openNotificationWithIcon("error", err?.message);
        });
    } else {
      api
        .post("blog/create", data)
        .then((res) => {
          setLoading(false);
          openNotificationWithIcon("success", "Blog Created Successfully");
          fetchTableData();
          hideFormDrawer();
        })
        .catch((err) => {
          setLoading(false);
          openNotificationWithIcon("error", err?.message);
        });
    }
  };

  const fetchPreviewHTML = async () => {
    if (typeof form.getFieldValue("Text") === "string") {
      setPreviewHTML({ ...previewHTML, loading: true });
      axios
        .post("https://api.github.com/markdown", {
          mode: "markdown",
          text: form.getFieldValue("Text"),
        })
        .then((res) => {
          console.log(res);
          setPreviewHTML({ loading: false, html: res.data });
        })
        .catch((err) => {
          console.log(err);
          setPreviewHTML({ ...previewHTML, loading: false });
        });
    }
  };
  const fetchPageTags = async (Id: number) => {
    setTags({ ...tags, loading: true });
    api
      .get(`/tag/getAll?cid=${Id}`)
      .then((res) => {
        setTags({
          data: res.data.data?.map((x: { Name: string; Id: number }) => ({
            label: x.Name,
            value: x.Id,
          })),
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setTags({ ...tags, loading: false });
      });
  };
  const saveToServer = async (file: Blob) => {
    setCoverImage({ ...coverImage, loading: true });
    const body = new FormData();
    body.append("pictures", file);

    api
      .post("/upload/pictures", body)
      .then((res) => {
        const fileName = res.data.data[0].filename;
        setCoverImage({ loading: false, src: `${hostURl}/static/${fileName}`, fileName: fileName });
        form.setFieldValue("CoverImage", fileName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectLocalImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = (input.files as FileList)[0];
      saveToServer(file as unknown as Blob);
    };
  };
  const fillForm = () => {
    if (editData) {
      form.setFieldsValue({
        ...editData,
        tags: editData.BTags.map((t) => t.Name),
        Text: editData.TextPage.Text,
      });
      setCoverImage({ loading: false, src: `${hostURl}/static/${editData.CoverImage}`, fileName: editData.CoverImage })
    } else {
      form.resetFields();
    }
  };
  useEffect(() => {
    fillForm();
  }, [editData]);
  return (
    <div className="p-2 bg-white h-full overflow-auto relative">
      <div className="absolute right-2">
        <button
          className="p-2 group hover:bg-[#e2e8f0] rounded"
          onClick={() => hideFormDrawer()}
        >
          <svg
            className="group-hover:fill-blue-600/100"
            aria-hidden="true"
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
          </svg>
        </button>
      </div>
      <div className="h-full mx-auto max-w-4xl">
        <div className="flex justify-between items-center sticky">
          <h3 className="mb-7 mt-3">Create Blog</h3>
          <div>
            <Button
              type={`${viewMode === "edit" ? "primary" : "dashed"}`}
              className={`${viewMode === "edit" ? "bg-[#1677FF]" : ""} mx-1`}
              onClick={() => {
                if (viewMode !== "edit") setViewMode("edit");
              }}
            >
              Edit
            </Button>
            <Button
              type={`${viewMode === "preview" ? "primary" : "dashed"}`}
              className={`${viewMode === "preview" ? "bg-[#1677FF]" : ""} mx-1`}
              onClick={() => {
                if (viewMode !== "preview") {
                  fetchPreviewHTML();
                  setViewMode("preview");
                }
              }}
            >
              Preview
            </Button>
          </div>
        </div>
        {viewMode === "preview" ? (
          <MarkdownPreview text={previewHTML.html} />
        ) : (
          <Form
            form={form}
            layout="vertical"
            className="font-mono"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            {coverImage.src && (
              <div className="bg-indigo-50 flex justify-center mb-3">
                <img
                  className="object-contain object-center"
                  src={coverImage.src}
                  alt="img"
                />
              </div>
            )}
            <div className="flex justify-between">
              <Form.Item name="CoverImage">
                <Button
                  type="dashed"
                  size="large"
                  onClick={() => selectLocalImage()}
                  loading={coverImage.loading}
                >
                  {coverImage.src ? "Change Cover Image" : "Add Cover Image"}
                </Button>
              </Form.Item>
              <div>
                <Select
                  size="large"
                  value={coverImage.fileName}
                  placeholder="Select From Default"
                  options={[
                    { value: "cover1.jpg" },
                    { value: "cover2.jpg" },
                    { value: "cover3.jpg" },
                  ]}
                  onChange={(value) => {
                    setCoverImage({
                      loading: false,
                      src: `${hostURl}/static/${value}`,
                      fileName: value,
                    });
                    form.setFieldValue("CoverImage", value);
                  }}
                />
              </div>
            </div>

            <Form.Item
              name="Title"
              className="flex-1 mr-2"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input
                bordered={false}
                className="text-4xl pl-0"
                placeholder="Title of the Problem here..."
              />
            </Form.Item>
            <div className="flex">
              <Form.Item
                label="Tags"
                name="tags"
                className="flex-1 ml-2"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Select
                  mode="tags"
                  size="large"
                  bordered={false}
                  placeholder="Please select"
                  style={{ width: "100%" }}
                  loading={tags.loading}
                  options={tags.data}
                />
              </Form.Item>
            </div>
            <Form.Item
              name="Text"
              label="Description"
              className="flex-1 ml-2"
              shouldUpdate={true}
              rules={[{ required: true }]}
            >
              <div className="h-[700px]">
                <Markdown
                  defaultValue={form.getFieldValue("Text")}
                  setText={(value) => {
                    form.setFieldsValue({ Name: value });
                  }}
                />
              </div>
            </Form.Item>
            <Form.Item
              label="Status"
              name="Status"
              rules={[{ required: true }]}
            >
              <Select
                size="large"
                placeholder="Please select"
                options={[
                  { label: "Public", value: "PUBLIC" },
                  { label: "Private", value: "PRIVATE" },
                ]}
              />
            </Form.Item>
            <div className="pb-5">
              <Button
                type="default"
                htmlType="button"
                className="mr-3"
                onClick={() => {
                  fillForm();
                }}
              >
                Reset
              </Button>
              <Button
                className="bg-[#1677FF]"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                {editData ? "Update" : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}
