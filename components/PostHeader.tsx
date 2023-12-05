import Link from "next/link"
import Avatar from "./Avatar"
import { AiOutlineDash } from "react-icons/ai";

type PostHeaderProps = {
  avatar: string;
  user: string;
  time: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ avatar, user, time }) => {
  return (
    <div className="flex gap-3">
      <div>
        <Link href="/belom">
          <span className="cursor-pointer">
            <Avatar url={avatar} />
          </span>
        </Link>
      </div>

      <div className="grow">
        <p>
          <Link href="/belom">
            <span className="mr-1 font-semibold cursor-pointer hover:underline">
              {user}
            </span>
          </Link>
          Shared a post
        </p>

        <p className="text-gray-500 text-sm">
          {time}
        </p>
      </div>

      <div>
        <span className="text-gray-400 text-[1.5rem] cursor-pointer">
          <AiOutlineDash />
        </span>
      </div>
    </div>
  )
}

export default PostHeader