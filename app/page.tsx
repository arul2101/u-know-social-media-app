import Layout from "@/components/Layout"
import PostForm from "@/components/PostForm"

const Home: React.FC = () => {
  return (
    <Layout hideNavigation={false}>
      <PostForm />
    </Layout>
  )
}

export default Home