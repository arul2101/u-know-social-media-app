import { IoMdArrowDropdown } from "react-icons/io"

const LoadMoreComment: React.FC = () => {
  return (
    <span className="flex items-center gap-1 mt-4 text-sky-500">
      <span>
        <IoMdArrowDropdown />
      </span>

      <span className="hover:underline cursor-pointer">
        Load More
      </span>
    </span>
  )
}

export default LoadMoreComment