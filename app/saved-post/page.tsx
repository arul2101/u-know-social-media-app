import Card from "@/components/Card"
import Layout from "@/components/Layout"
import PostItem from "@/components/PostItem"

const SavedPostPage: React.FC = () => {
  return (
    <Layout hideNavigation={false}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </Layout>
  )
}

export default SavedPostPage