/**
 * @file blog.js
 */
// Import dependencies
import Head from 'next/head'

// Import library variables
import { getAllPostsForHome } from '../lib/api'
import { BLOG_NAME } from '../lib/constants'

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import BlogArticles from '../components/blog-articles'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Blog({ posts: { edges }, preview }) {
  const recentPosts = edges.slice(0, 3);
  const allPosts = edges.slice(0, 20);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{ BLOG_NAME }</title>
        </Head>
        <Container>
          <Header />
          <div className={`sidebar-body-split flex`}>
            <div className={`all-articles-layout-container w-7/12`}>
              <h2 className="text-h2 font-rylan text-center">
                Latest Posts
              </h2>
              {/* Show All Articles (20 at a time) */}
              {allPosts.length > 0 && <BlogArticles posts={allPosts} />}
            </div>
            <div className={`sidebar-layout-container w-2/12`}>
              <Sidebar posts={recentPosts} />
            </div> 
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview)
  return {
    props: { posts, preview },
  }
}