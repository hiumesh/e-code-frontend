import { useState } from "react";
import DashboardSideBar from "../components/dashboardSideBar";
import Problem from "../components/problem";
import Page from "../components/page";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Problem')
  return (
    <div className="grow pb-4 flex overflow-hidden">
      <DashboardSideBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="bg-gray-300 grow rounded-md mx-4 p-2">
        {activeTab === 'Problem' && <Problem />}
        {activeTab === 'Page' && <Page />}
        {activeTab === 'Playlist' && <div>Playlist</div>}
      </section>
    </div>
  );
}
