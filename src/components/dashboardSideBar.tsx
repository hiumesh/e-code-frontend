import { Dispatch } from "react";
import { CodeOutlined, FileTextOutlined, ProfileOutlined } from '@ant-design/icons'

interface DashboardSideBarPropTypes {
  activeTab: string,
  setActiveTab: Dispatch<string>
}
export default function DashboardSideBar({ activeTab, setActiveTab }: DashboardSideBarPropTypes) {
  return (
    <aside className="w-64 ml-4 h-full" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-200 rounded-md dark:bg-gray-800 h-full">
        <ul className="space-y-2">
          <li>
            <button
              className={`flex w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${activeTab === 'Problem' ? "bg-gray-100" : ""}`}
              onClick={() => setActiveTab('Problem')}
            >
              <CodeOutlined
                style={{ fontSize: '23px' }}
                className="text-gray-500"
              />
              <span className="ml-3 leading-[100%]">Problems</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${activeTab === 'Page' ? "bg-gray-100" : ""}`}
              onClick={() => setActiveTab('Page')}
            >
              <FileTextOutlined
                style={{ fontSize: '23px' }}
                className="text-gray-500"
              />
              <span className="ml-3 leading-[100%]">Page</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${activeTab === 'Playlist' ? "bg-gray-100" : ""}`}
              onClick={() => setActiveTab('Playlist')}
            >
              <ProfileOutlined
                style={{ fontSize: '23px' }}
                className="text-gray-500"
              />
              <span className="ml-3 leading-[100%]">Playlist</span>
            </button>
          </li>
          
        </ul>
      </div>
    </aside>
  );
}
