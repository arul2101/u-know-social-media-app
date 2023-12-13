import Card from "./Card"
import FriendItem from "./FriendItem"

const ProfileFriendsPage: React.FC = () => {
  return (
    <div>
      <Card noPadding={false}>
        <h2 className="text-3xl mb-2">Friends</h2>
        <div className="">
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendItem />
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendItem />
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendItem />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProfileFriendsPage