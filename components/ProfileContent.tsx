import ProfileFriendsPage from "./ProfileFriendsPage";
import ProfilePostsPage from "./ProfilePostsPage";
import ProfileImagesPage from "./ProfileImagesPage";

type ProfileContentProps = {
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({activeTab}) => {

  return (
    <>
      {activeTab === 'friends' && <ProfileFriendsPage />}
      {activeTab === 'posts' && <ProfilePostsPage />}
      {activeTab === "photos" && <ProfileImagesPage />}
    </>
  )
}

export default ProfileContent