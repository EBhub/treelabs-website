import { getAllPosts, getPostBySlug } from "../../lib/blogs"
import { serialize } from "next-mdx-remote/serialize"
import BlogLayout from "../../components/BlogLayout"
import Head from "next/head"

export default function BlogPost({meta, source}) {
  return (
    <div>
      <BlogLayout meta={meta} source={source} />
    </div>
  )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug)
    const mdxSource = await serialize(post.content)
    return {
      props: {
        meta: post.meta,
        source: mdxSource
      }
    }
  }
  
  export async function getStaticPaths() {
    const posts = getAllPosts()

    const paths = posts.map(post => ({params: { slug: post.slug}}));
  
    return {
      paths: paths,
      fallback: false
    }
  }