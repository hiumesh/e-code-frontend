import parse from "html-react-parser";
import axios from "axios";
import { Skeleton } from "antd";
import { useEffect, useState } from "react";

interface MarkdownPreviewPropTypes {
  text: string | null;
}

const MarkdownPreview = ({ text }: MarkdownPreviewPropTypes) => {
  const [previewHTML, setPreviewHTML] = useState<{
    loading: boolean;
    html: string | null;
  }>({ loading: false, html: null });


  const fetchPreviewHTML = async () => {
    setPreviewHTML({ ...previewHTML, loading: true });
    axios
      .post("https://api.github.com/markdown", {
        mode: "markdown",
        text: text,
      })
      .then((res) => {
        console.log(res);
        setPreviewHTML({ loading: false, html: res.data });
      })
      .catch((err) => {
        console.log(err);
        setPreviewHTML({ ...previewHTML, loading: false });
      });
  };

  useEffect(() => {
    if (typeof text === 'string' && text.length > 0) {
      fetchPreviewHTML()
    }
  }, [])
  return <div className="markdown-body">
    { previewHTML.loading && <Skeleton />}
    {parse(previewHTML.html || "")}
    </div>;
};

export default MarkdownPreview;
