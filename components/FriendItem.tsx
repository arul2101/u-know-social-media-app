import Avatar from "./Avatar"

const FriendItem: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Avatar url="https://i.pravatar.cc/300" />
      <div>
        <h3 className="font-bold text-xl">Jane Doe</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  )
}

export default FriendItem