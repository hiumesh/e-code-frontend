import { Tag } from "antd";
import MarkdownPreview from "./MarkdownPreview";

export const getDifficultyTag = (type: string) => {
  if (type === "EASY")
    return (
      <div className="mr-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-green-200 text-green-700 rounded-full">
        Easy
      </div>
    );
  else if (type === "MEDIUM")
    return (
      <div className="mr-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
        Medium
      </div>
    );
  else
    return (
      <div className="mr-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-red-200 text-red-700 rounded-full">
        Hard
      </div>
    );
};

export default function ProblemDescription() {
  return (
    <div className="px-3 h-full overflow-auto">
      <h3>Longest Comman Subsequence</h3>
      <div className="flex items-center">
        {getDifficultyTag("EASY")}
        <button className="flex items-center rounded-md text-slate-500 text-xs px-1 pb-1 pt-[2px] hover:bg-slate-100 mx-2">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="19px"
            height="19px"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z"
              clipRule="evenodd"
            ></path>
          </svg>

          <span className="mt-[3px]">32.3K</span>
        </button>
        <button className="flex items-center rounded-md text-slate-500 text-xs px-1 pb-1 pt-[2px] hover:bg-slate-100 mx-2">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="19px"
            height="19px"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.663 22.309a1 1 0 01-.914.594 3.67 3.67 0 01-3.67-3.671V16.67H5.05a2.78 2.78 0 01-2.78-3.2l1.228-8.01a2.778 2.778 0 012.769-2.364H18.98a2.78 2.78 0 012.78 2.781v6.232a2.78 2.78 0 01-2.78 2.78H16.96l-3.297 7.419zm5.318-9.419a.78.78 0 00.78-.78V5.878a.78.78 0 00-.78-.78H17.31v7.792h1.67zM6.257 5.097a.781.781 0 00-.781.666l-1.229 8.01a.78.78 0 00.792.898h5.04a1 1 0 011 1v3.56c0 .712.443 1.32 1.07 1.56l3.16-7.113v-8.58H6.258z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="mt-[3px]">7</span>
        </button>
        <button className="flex items-center rounded-md text-slate-500 text-xs px-1 pb-1 pt-[2px] hover:bg-slate-100 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="19px"
            height="19px"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex item-center my-2">
        <Tag color="default">Apple</Tag>
        <Tag color="default">Goggle</Tag>
        <Tag color="default">Amazon</Tag>
        <Tag color="default">Microsoft</Tag>
      </div>
      <MarkdownPreview
        text={
          "An h1 header\n" +
          "============\n" +
          "\n" +
          "Paragraphs are separated by a blank line.\n" +
          "\n" +
          "2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n" +
          "look like:\n" +
          "\n" +
          "  * this one\n" +
          "  * that one\n" +
          "  * the other one\n" +
          "\n" +
          "Note that --- not considering the asterisk --- the actual text\n" +
          "content starts at 4-columns in.\n" +
          "\n" +
          "> Block quotes are\n" +
          "> written like so.\n" +
          ">\n" +
          "> They can span multiple paragraphs,\n" +
          "> if you like.\n" +
          "\n" +
          "Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it's all\n" +
          'in chapters 12--14"). Three dots ... will be converted to an ellipsis.\n' +
          "Unicode is supported. ☺\n" +
          "\n" +
          "\n" +
          "\n" +
          "An h2 header\n" +
          "------------\n" +
          "\n" +
          "Here's a numbered list:\n" +
          "\n" +
          " 1. first item\n" +
          " 2. second item\n" +
          " 3. third item\n" +
          "\n" +
          "Note again how the actual text starts at 4 columns in (4 characters\n" +
          "from the left side). Here's a code sample:\n" +
          "\n" +
          "    # Let me re-iterate ...\n" +
          "    for i in 1 .. 10 { do-something(i) }\n" +
          "\n" +
          "As you probably guessed, indented 4 spaces. By the way, instead of\n" +
          "indenting the block, you can use delimited blocks, if you like:\n" +
          "\n" +
          "~~~\n" +
          "define foobar() {\n" +
          '    print "Welcome to flavor country!";\n' +
          "}\n" +
          "~~~\n" +
          "\n" +
          "(which makes copying & pasting easier). You can optionally mark the\n" +
          "delimited block for Pandoc to syntax highlight it:\n" +
          "\n" +
          "~~~python\n" +
          "import time\n" +
          "# Quick, count to ten!\n" +
          "for i in range(10):\n" +
          "    # (but not *too* quick)\n" +
          "    time.sleep(0.5)\n" +
          "    print i\n" +
          "~~~\n" +
          "\n" +
          "\n" +
          "\n" +
          "### An h3 header ###\n" +
          "\n" +
          "Now a nested list:\n" +
          "\n" +
          " 1. First, get these ingredients:\n" +
          "\n" +
          "      * carrots\n" +
          "      * celery\n" +
          "      * lentils\n" +
          "\n" +
          " 2. Boil some water.\n" +
          "\n" +
          " 3. Dump everything in the pot and follow\n" +
          "    this algorithm:\n" +
          "\n" +
          "        find wooden spoon\n" +
          "        uncover pot\n" +
          "        stir\n" +
          "        cover pot\n" +
          "        balance wooden spoon precariously on pot handle\n" +
          "        wait 10 minutes\n" +
          "        goto first step (or shut off burner when done)\n" +
          "\n" +
          "    Do not bump wooden spoon or it will fall.\n" +
          "\n" +
          "Notice again how text always lines up on 4-space indents (including\n" +
          "that last line which continues item 3 above).\n" +
          "\n" +
          "Here's a link to [a website](http://foo.bar), to a [local\n" +
          "doc](local-doc.html), and to a [section heading in the current\n" +
          "doc](#an-h2-header). Here's a footnote [^1].\n" +
          "\n" +
          "[^1]: Footnote text goes here.\n" +
          "\n" +
          "Tables can look like this:\n" +
          "\n" +
          "size  material      color\n" +
          "----  ------------  ------------\n" +
          "9     leather       brown\n" +
          "10    hemp canvas   natural\n" +
          "11    glass         transparent\n" +
          "\n" +
          "Table: Shoes, their sizes, and what they're made of\n" +
          "\n" +
          "(The above is the caption for the table.) Pandoc also supports\n" +
          "multi-line tables:\n" +
          "\n" +
          "--------  -----------------------\n" +
          "keyword   text\n" +
          "--------  -----------------------\n" +
          "red       Sunsets, apples, and\n" +
          "          other red or reddish\n" +
          "          things.\n" +
          "\n" +
          "green     Leaves, grass, frogs\n" +
          "          and other things it's\n" +
          "          not easy being.\n" +
          "--------  -----------------------\n" +
          "\n" +
          "A horizontal rule follows.\n" +
          "\n" +
          "***\n" +
          "\n" +
          "Here's a definition list:\n" +
          "\n" +
          "apples\n" +
          "  : Good for making applesauce.\n" +
          "oranges\n" +
          "  : Citrus!\n" +
          "tomatoes\n" +
          '  : There\'s no "e" in tomatoe.\n' +
          "\n" +
          "Again, text is indented 4 spaces. (Put a blank line between each\n" +
          "term/definition pair to spread things out more.)\n" +
          "\n" +
          'Here\'s a "line block":\n' +
          "\n" +
          "| Line one\n" +
          "|   Line too\n" +
          "| Line tree\n" +
          "\n" +
          "and images can be specified like so:\n" +
          "\n" +
          '![example image](example-image.jpg "An exemplary image")\n' +
          "\n" +
          "Inline math equations go in like so: $omega = dphi / dt$. Display\n" +
          "math should get its own line and be put in in double-dollarsigns:\n" +
          "\n" +
          "$$I = int \rho R^{2} dV$$\n" +
          "\n" +
          "And note that you can backslash-escape any punctuation characters\n" +
          "which you wish to be displayed literally, ex.: `foo`, *bar*, etc."
        }
      />
    </div>
  );
}
