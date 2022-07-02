import Head from "next/head"
import NextLink from "next/link"
import { chakra, Heading, Text, Flex, Wrap, Spacer, Box, Image, Center, Link, Grid, GridItem} from "@chakra-ui/react"

import { getAllPosts } from "../../lib/blogs"

import BlogTag from "../../components/BlogTag"
import CollapsingNavigation from "../../components/CollapsingNavigation"

export default function Blog({posts}) {


    const post_items = posts.map((post, index) => {
        const tags = post.tags.split(",").map((tag, index) => {
            return <BlogTag key={index} backgroundColor="white" href="/" >{tag}</BlogTag>
        })

        return (<NextLink href={"/blog/"+post.slug} key={index}>
                <Box backgroundColor="gray.100" mb="10" p={0} _hover={{cursor: "pointer"}}>
                    <Image alt="Blog Image" src={post.image} height="100px" width="100%" fit="cover"/>
                    <Heading color="gray.700" maxWidth="1200px" m="20px" fontSize={["3xl", "4xl", "4xl", "4xl"]}>{post.title}</Heading>
                    <Flex ml="20px">
                        {tags}
                    </Flex>
                    <Text noOfLines={2} m="20px">{post.description}</Text>
                </Box>
            </NextLink>
        )
    })

    return (
        <div>
        <Head>
            <title>TreeLabs - Blogs</title>
            <meta name="description" content="TreeLabs: The Web3 PowerHouse" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <CollapsingNavigation />

            <Flex direction="column" justifyContent="center" alignItems="center" maxWidth="1000px" m="0px auto" p="10">
                {post_items}
            </Flex>
        </main>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const posts = getAllPosts()
    return {
      props: {
        posts
      }
    }
  }
  
//   export async function getStaticPaths() {
//     const posts = getAllPosts()

//     const paths = posts.map(post => ({params: { slug: post.slug}}));
  
//     return {
//       paths: paths,
//       fallback: false
//     }
//   }