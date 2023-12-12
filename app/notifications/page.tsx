import Avatar from "@/components/Avatar"
import Card from "@/components/Card"
import Layout from "@/components/Layout"
import NotificationItem from "@/components/NotificationItem"
import Link from "next/link"

const Notifications: React.FC = () => {
  return (
    <Layout hideNavigation={false}>
      <Card noPadding={false}>
        <div className="">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </div>
      </Card>
    </Layout>
  )
}

export default Notifications