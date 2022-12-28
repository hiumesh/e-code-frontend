import { useState, useRef, useEffect } from "react";
import { Input } from "antd";
import { TextAreaRef } from "antd/es/input/TextArea";
import MarkdownMenu from "./MarkdownMenu";

const giveText = (command: string, idx: number) => {
  if (command === "bold") {
    return { text: "****", start: idx + 2, end: idx + 2 };
  } else if (command === "italic") {
    return { text: "____", start: idx + 2, end: idx + 2 };
  } else if (command === "underline") {
    return { text: "<u></u>", start: idx + 3, end: idx + 3 };
  } else if (command === "link") {
    return { text: "[](url)", start: idx + 3, end: idx + 6 };
  } else if (command === "olist") {
    return { text: "\n\n1. \n", start: idx + 3, end: idx + 3 };
  } else if (command === "ulist") {
    return { text: "\n\n- \n", start: idx + 3, end: idx + 3 };
  } else if (command === "head1") {
    return { text: "\n# \n", start: idx + 3, end: idx + 3 };
  } else if (command === "head2") {
    return { text: "\n## \n", start: idx + 4, end: idx + 4 };
  } else if (command === "head3") {
    return { text: "\n### \n", start: idx + 5, end: idx + 5 };
  } else if (command === "head4") {
    return { text: "\n#### \n", start: idx + 6, end: idx + 6 };
  } else if (command === "head5") {
    return { text: "\n##### \n", start: idx + 7, end: idx + 7 };
  } else if (command === "head6") {
    return { text: "\n###### \n", start: idx + 8, end: idx + 8 };
  } else if (command === "quote") {
    return { text: "> ", start: idx + 2, end: idx + 2 };
  } else if (command === "code") {
    return { text: "``", start: idx + 1, end: idx + 1 };
  } else if (command === "hline") {
    return { text: "\n---\n", start: idx + 5, end: idx + 5 };
  } else if (command === "table") {
    return {
      text: "\n| Tables         | Are           | Cool    |\n| -------------- |:-------------:| -------:|\n| col 3 is       | right-aligned |   $16000|\n| col 2 is       | centered      |      $12|\n| zebra stripes  | are neat      |       $1|\n",
      start: idx + 184,
      end: idx + 184,
    };
  } else if (command === "code-block") {
    return { text: "```\n\n```", start: idx + 3, end: idx + 3 };
  } else if (command === "embed") {
    return { text: "", idx: 0 };
  } else if (command === "image") {
    return { text: "![Uploading image](...)", start: idx + 24, end: idx + 24 };
  }
};
function split(str: string, index: number) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}

interface CommentBoxPropTypes {
  setText: (value: string) => void;
}
const CommentBox = ({ setText }: CommentBoxPropTypes) => {
  const [value, setValue] = useState({ text: "", start: -1, end: -1 });
  const textArea = useRef<TextAreaRef | null>(null);

  const commandClickHandler = async (command: string) => {
    if (textArea?.current) {
      const text = textArea?.current?.resizableTextArea?.textArea.value || "";
      const focusPosition =
        textArea?.current?.resizableTextArea?.textArea.selectionStart;
      const commandText = giveText(
        command,
        textArea?.current?.resizableTextArea?.textArea?.selectionStart as number
      );
      const [first, second] = split(text, focusPosition as number);
      setValue({
        text: first + commandText?.text + second,
        start: commandText?.start as number,
        end: commandText?.end as number,
      });
      setText(first + commandText?.text + second);
      textArea.current.focus();
    }
  };
 
  useEffect(() => {
    if (value.start >= 0 && value.end >= 0)
      textArea?.current?.resizableTextArea?.textArea.setSelectionRange(
        value.start,
        value.end
      );
  }, [value.end, value.start]);
  return (
    <div className="mb-3 border rounded-md h-full flex flex-col focus-within:border-2 focus-within:border-blue-600">
      <Input.TextArea
        placeholder="Comment Box Support Markdown..."
        value={value.text}
        className="font-mono text-lg pt-3 flex-1"
        ref={textArea}
        bordered={false}
        rows={6}
        onChange={(e) => {
          setValue((prev) => ({ text: e.target.value, end: -1, start: -1 }));
          setText(e.target.value)
        }}
      />
      <MarkdownMenu commandClickHandler={commandClickHandler} />
    </div>
  );
};

export default CommentBox;
