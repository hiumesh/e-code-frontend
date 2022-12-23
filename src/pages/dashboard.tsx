import DashboardSideBar from "../components/dashboardSideBar";
import Problem from "../components/problem";

export default function Dashboard() {
  return (
    <div className="grow pb-4 flex">
      <DashboardSideBar />
      <section className="bg-gray-300 grow rounded-md mx-4 p-2">
        <Problem />
      </section>
    </div>
  );
}
