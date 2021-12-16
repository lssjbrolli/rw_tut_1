import { MetaTags } from '@redwoodjs/web'
import BlogPostCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <BlogPostCell />
    </>
  )
}

export default HomePage
