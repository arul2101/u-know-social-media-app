import Layout from "@/components/Layout"
import Login from "@/components/Login";
import PostForm from "@/components/PostForm"
import PostItem from "@/components/PostItem"

const Home: React.FC = () => {
  const login = true;

  if (login) return <Login />
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