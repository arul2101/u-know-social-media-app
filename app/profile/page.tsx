import Avatar from "@/components/Avatar"
import Card from "@/components/Card"
import Cover from "@/components/Cover"
import Layout from "@/components/Layout"
import ProfileContent from "@/components/ProfileContent"
import ProfileTabs from "@/components/ProfileTabs"
import Image from "next/image"

const ProfilePage = () => {
  return (
    <Layout hideNavigation={false}>
      <Card noPadding={true}>
        <div className="relative rounded-md">
          <Cover />
          <div className="absolute top-24 left-4 z-20">
            <Image
              src="https://i.pravatar.cc/300"
              alt="Image Profile"
              width={1920}
              height={1080}
              className="w-36 h-36 rounded-full"
            />
          </div>
          <div className="p-4 pt-0 md:pt-4 pb-0">
            <div className="ml-24 md:ml-40 flex justify-between">
              {/* <div> */}
                <h1 className="text-3xl font-bold">John Doe</h1>
              {/* </div> */}
            </div>
          </div>

          <ProfileTabs active="posts" />
        </div>
      </Card>
      <ProfileContent activeTab="posts" />
    </Layout>
  )
}

export default ProfilePage