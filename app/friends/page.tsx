import Card from "@/components/Card"
import Layout from "@/components/Layout"

const FriendsPage = () => {
  return (
    <Layout hideNavigation={false}>
      <Card noPadding={false}>
        <h2 className="font-semibold text-xl">All Friends</h2>
      </Card>
    </Layout>
  )
}

export default FriendsPage