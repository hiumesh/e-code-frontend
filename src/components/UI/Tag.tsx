import { ReactNode } from "react"

interface TagPropTypes {
  children: ReactNode,
  color?: "red" | "grey" | "green" | "colorless",
  size?: "small" | "medium" | "large"
  className?: string
}
const getTagColor = (color: "red" | "grey" | "green" | "colorless" | undefined) => {
  if (color === "red") return "bg-red-200 hover:bg-red-300"
  else if (color === "green") return "bg-green-200 hover:bg-green-300"
  else if (color === 'colorless') return "bg-transparent"
  else return "bg-gray-200 hover:bg-gray-300"
}
const getTagSize = (size: "small" | "medium" | "large" | undefined) => {
  if (size === "small") return "text-xs px-2 py-1 font-semibold"
  else if (size === "large") return "text-base px-4 py-2 font-bold"
  else return "text-sm px-3 py-0.5 font-bold"
}
export const Tag = ({children, size, color }: TagPropTypes) => {
  return (
    <div
      className={`m-1 inline-flex flex-wrap justify-between items-center ${getTagColor(color)} rounded ${getTagSize(size)} leading-loose cursor-pointer`}
    >
      {children}
    </div>
  )
}