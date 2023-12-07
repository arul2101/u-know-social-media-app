import Card from "./Card";
import FriendItem from "./FriendItem";
import PostItem from "./PostItem";

type ProfileContentProps = {
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({activeTab}) => {
  return (
    <div className="">
      {activeTab === 'posts' && (
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
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendItem />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default ProfileContent