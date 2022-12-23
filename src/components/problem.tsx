import { Drawer, Button, Switch } from "antd";
import { useState } from "react";
import ProblemForm from "./Forms/problemForm";
import ProblemTable from "./Tables/problemTable";
import { HiPlus } from 'react-icons/hi'

export default function Problem() {
  const [formDrawer, setFormDrawer] = useState(false);

  return (
    <div className="p-2 flex h-full">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-2 bg-white grow mr-3">
        <div className="flex justify-between items-center m-2">
          <div className="dark:bg-gray-900">
            <label className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <Button
            className="bg-[#1677FF] flex items-center"
            type="primary"
            size="middle"
            onClick={() => setFormDrawer(true)}
            icon={<HiPlus className="mr-2 text-lg" />}
          >
            Create
          </Button>
        </div>

        <ProblemTable />
      </div>
      <div className="rounded-lg p-2 bg-white w-2/6">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Profile
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={() => setFormDrawer(false)}
        open={formDrawer}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <ProblemForm />
      </Drawer>
    </div>
  );
}
