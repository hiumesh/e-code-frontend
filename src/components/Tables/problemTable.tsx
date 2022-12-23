import { Tag } from "antd";
import { ProblemTypes } from "../problem";

const DifficultyTags = (type: string, text: string) => {
  if (type === 'HARD') return <Tag color="red">{text}</Tag>
  else if (type === 'EASY') return <Tag color="green">{text}</Tag>
  else return <Tag color="orange">{text}</Tag>
}

interface ProblemTablePropTypes {
  problems: { loading: boolean,  data: ProblemTypes[] | [] },
  setFormDrawer: (data: {editData: ProblemTypes | null, visible: boolean}) => void,
}

export default function ProblemTable({ problems, setFormDrawer }: ProblemTablePropTypes) {
  
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            Title
          </th>
          <th scope="col" className="py-3 px-6">
            Category
          </th>
          <th scope="col" className="py-3 px-6">
            Tags
          </th>
          <th scope="col" className="py-3 px-6">
            Difficulty
          </th>
          <th scope="col" className="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {problems.data.map((p) => (
          <tr key={p.Id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="sr-only">checkbox</label>
              </div>
            </td>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {p.Name}
            </th>
            <td className="py-4 px-6">{p.Category.Name}</td>
            <td className="py-4 px-6">{
              p.Tags?.map((t) => <Tag key={t.Id} className="mb-1" color="blue">{t.Name}</Tag>)
            }</td>
            <td className="py-4 px-6">{DifficultyTags(p.Difficulty, p.Difficulty)}</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => setFormDrawer({ editData: p, visible: true })}
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
