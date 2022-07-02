import { MDXRemote } from 'next-mdx-remote'
import NextLink from "next/link"
import Head from "next/head"
import { chakra, Spacer, Box, Image, Heading, Text, Flex, Link, UnorderedList, ListItem, Center} from '@chakra-ui/react'
import Prism from "prismjs";
import "prismjs/components/prism-python"
import "prismjs/components/prism-solidity"
import { useEffect } from 'react';

import BlogTag from "./BlogTag"
import CollapsingNavigation from './CollapsingNavigation';


const components = {
    img: Image,
    h1: ({children}) => {
        return (<Heading color="gray.700" maxWidth="1200px" m="10px auto" fontSize={["3xl", "4xl", "5xl", "6xl"]}>{children}</Heading>)
    },
    h2: ({children}) => {
        return (<Heading color="gray.700" maxWidth="1200px" mb="3" mt="3" fontSize={["2xl", "3xl", "4xl", "5xl"]}>{children}</Heading>)
    },
    p: ({children}) => {
        return (<Text mb="3" fontSize={["md", "l", "l"]}>{children}</Text>)
    },
    ul: ({children}) => {
        return (<UnorderedList ml="5" mb="2" fontSize={["md", "l", "l"]}>{children}</UnorderedList>)
    },
    li: ({children}) => {
        return (<ListItem>{children}</ListItem>)
    },
    a: ({href, children}) => {
        return (<Link href={href} color="blue.400" mt="7" fontSize={["md", "l", "l"]}>{children}</Link>)
    }
    // code: Pre,
    // inlineCode: Code
  }

export default function BlogLayout({meta, source}) {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const tags = meta.tags.split(",").map((tag, index) => {
        return <BlogTag key="index" href="/" >{tag}</BlogTag>
    })

    return (
        <div>
            <Head>
                <title>Tree Labs - {meta.title}</title>
                <meta name="description" content="Tree Labs: The Web3 PowerHouse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CollapsingNavigation />
                <Image alt="Blog Image" src={meta.image} height={["100px", "100px", "200px"]} width="100%" fit="cover"/>
                <Box maxWidth="1000px" m="0px auto" pl="10" pr="10">
                    <Heading color="gray.700" mt="5"fontSize={["3xl", "4xl", "5xl", "6xl"]}>{meta.title}</Heading>
                    <Flex mt="3">
                        {tags}
                    </Flex>
                    <Text mt="3"><Text as="i">Published on {meta.date} by {meta.author} (<Link color="blue.500" href={meta.twitter}>Twitter</Link>)</Text></Text>
                </Box>
                <Box maxWidth="1000px" m="0px auto" mt="5" mb="20" pl="10" pr="10">
                    <MDXRemote {...source} components={components} />
                </Box>
            </main>
        </div>
    )
}