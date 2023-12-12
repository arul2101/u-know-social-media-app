'use client'

import Card from "@/components/Card"
import Cover from "@/components/Cover"
import Layout from "@/components/Layout"
import ProfileContent from "@/components/ProfileContent"
import ProfileImage from "@/components/ProfileImage"
import ProfileName from "@/components/ProfileName"
import ProfileTabs from "@/components/ProfileTabs"
import { useState } from "react"

const ProfilePage = () => {
  const [activePage, setActivePage] = useState<string>("posts");
  return (
    <Layout hideNavigation={false}>
      <Card noPadding={true}>
        <div className="relative rounded-md">
          <Cover />
          <ProfileImage />
          <ProfileName />
          <ProfileTabs active={activePage} setActivePage={setActivePage} />
        </div>
      </Card>
      <ProfileContent activeTab={activePage} />
    </Layout>
  )
}

export default ProfilePage