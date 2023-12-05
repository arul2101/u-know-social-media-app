import Avatar from "./Avatar"

type CommentProps = {
  user: string;
  label: string;
  time: string;
}

const Comment: React.FC<CommentProps> = ({ user, label, time }) => {
  return (
    <div className="flex mt-4 gap-3">
      <div>
        <Avatar url="https://i.pravatar.cc/300" />
      </div>

      <div className="grow shadow-md p-2 rounded-2xl">
        <span className="mr-1 font-semibold cursor-pointer hover:underline">
          {user}
        </span>

        <span className="text-gray-500 text-sm">{time}</span>

        <span className="font-light block mt-4">
          {label}
        </span>
      </div>
    </div>
  )
}

export default Comment