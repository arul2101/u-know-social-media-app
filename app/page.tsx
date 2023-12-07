import Layout from "@/components/Layout"
import PostForm from "@/components/PostForm"
import PostItem from "@/components/PostItem"

const Home: React.FC = () => {
  return (
    <Layout hideNavigation={false}>
      <PostForm />
      <PostItem />
      <PostItem />
      <PostItem />
    </Layout>
  )
}

export default Home