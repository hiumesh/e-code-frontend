import { Dropdown } from "antd";

interface MarkdownMenuPropTypes {
  commandClickHandler: (command: string) => void;
}

const MarkdownMenu = ({ commandClickHandler }: MarkdownMenuPropTypes) => {
  const items = [
    {
      key: "1",
      label: "H1",
      onClick: () => commandClickHandler("head1"),
    },
    {
      key: "2",
      label: "H2",
      onClick: () => commandClickHandler("head2"),
    },
    {
      key: "3",
      label: "H3",
      onClick: () => commandClickHandler("head3"),
    },
    {
      key: "4",
      label: "H4",
      onClick: () => commandClickHandler("head4"),
    },
    {
      key: "4",
      label: "H5",
      onClick: () => commandClickHandler("head5"),
    },
    {
      key: "5",
      label: "H6",
      onClick: () => commandClickHandler("head6"),
    },
  ];

  const moreItems = [
    {
      key: "1",
      label: (
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("hline")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 11h6v2H2z"></path>
              <path d="M2 11h6v2H2zm7 0h6v2H9zm7 0h6v2h-6z"></path>
              <path
                d="M12 6.586 9.707 4.293 8.293 5.707 12 9.414l3.707-3.707-1.414-1.414zm0 10.828-2.293 2.293-1.414-1.414L12 14.586l3.707 3.707-1.414 1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("table")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("strike")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.087 4.087 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099s.974.562 1.613.75c.62.18 1.297.414 2.03.699z"></path>
            </svg>
          </button>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("embid")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13 9h8L11 24v-9H4l9-15v9Zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11Z"></path>
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-between items-center border-t py-2 px-2">
      <div className="flex">
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("bold")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("italic")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("underline")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3zM4 20h16v2H4z"></path>
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("olist")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("ulist")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path>
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("link")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("image")}
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
              <path d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
            </svg>
          </button>
        </div>
        <Dropdown menu={{ items }}>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path>
            </svg>
          </button>
        </Dropdown>
        <div>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("code")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("quote")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
            onClick={() => commandClickHandler("code-block")}
          >
            <svg
              className="group-hover:fill-blue-600/100"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Dropdown menu={{ items: moreItems }}>
          <button
            type="button"
            className="p-2 group hover:bg-[#e2e8f0] rounded"
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
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
              ></path>
            </svg>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};


export default MarkdownMenu;
