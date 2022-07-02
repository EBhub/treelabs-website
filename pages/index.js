/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import NextLink from 'next/link'
import { chakra, Heading, Text, Flex, Spacer, Box, Image, Center, Link, Icon } from '@chakra-ui/react'
import CollapsingNavigation from "../components/CollapsingNavigation"
import {IoIosPeople} from 'react-icons/io'
import {FaRocket, FaSeedling, FaRegNewspaper} from 'react-icons/fa'

import Typewriter from 'typewriter-effect/dist/react'

import GradienButton from '../components/GradientButton'
import ActivitySquare from '../components/ActivitySquare'
import ActivityContainer from '../components/ActivityContainer'
import ProjectOverview from '../components/ProjectOverview'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TreeLabs - The Web3 Powerhouse</title>
        <meta name="description" content="TreeLabs: The Web3 Powerhouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CollapsingNavigation />

        <Flex pb="150px" minHeight="500px" direction={["column", "column", "column", "row"]} width="100%" maxWidth="900px" m="0 auto" alignItems="center">
          <Flex direction="column" m="0px" p={["40px", "40px", "40px", "0px"]}>
            <Heading color="black"  fontSize={["4xl", "5xl", "6xl", "7xl"]} fontFamily="cairo">The Web3 Powerhouse</Heading>
            <Text mt="5" color="black" fontSize="xl" fontWeight="semibold">We <chakra.span color="pink.700" fontWeight="bold">build</chakra.span>, <chakra.span color="pink.700" fontWeight="bold">support</chakra.span> and <chakra.span color="pink.700" fontWeight="bold">invest</chakra.span> in the future of web technology.</Text>
          </Flex>
          <Flex alignItems="flex-end">
            <Link href="mailto:contact@treelabs.io" className="connect-btn" m="0 10px" mt="130px">
              <Box color="white" zIndex="2" width="100%" className="connect-btn-content" fontSize={"2xl"}>Let's Connect</Box>
            </Link>
          </Flex>
        </Flex>
        <Box className="pink-diagonal" backgroundColor="pink.700" p="2.1px">
        </Box>
        <Box className="dark-diagonal" backgroundColor="gray.700" p="40px" pb="200px">
          <Box maxWidth="920px" m="0 auto" p="20px">
            <Flex alignItems="center" left="-36px" position="relative">
              <Image src="images/svg/leaf.svg" mr="11px"/>
              <Heading color="white" fontSize={["3xl", "4xl", "4xl", "4xl"]} fontFamily="cairo">Our Vision</Heading>
            </Flex>
            <Text fontSize="l" mt="5" color="white">We believe that we are at a turning point in history where we shift from a corporation-owned economy to a user-owned economy. This will enspire the next generation of builders to create better and more passionate projects that are self-built, self-owned and self-governed.
            </Text>
            <Text fontSize="l" mt="3" color="white">Our mission is to support these entrepreneurs in their endeavors. <a id="About" /></Text>
          </Box>
          <ActivityContainer pink="01." title="Build." mt="20">
              <Box mr="20px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Tailor-made Solutions</Text>
                <Text color="white">Projects can rely on our engineering and design experience to build, secure and finalize their products.</Text>
              </Box>
              <Box mr="20px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Balanced Tokenomics</Text>
                <Text color="white">We work closely with projects to create balanced tokenomics that fit the needs of their product.</Text>
              </Box>
              <Box mr="30px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Go-To-Market Strategies</Text>
                <Text color="white">Projects can trust in our research-backed due diligence to create custom go-to-market strategies.</Text>
              </Box>
          </ActivityContainer>
          <ActivityContainer pink="02." title="Support." mt="10">
              <Box mr="65px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Strategic Introductions</Text>
                <Text color="white">With our vast network, projects can lean on our trusted network of partners and focus on what they do best.</Text>
              </Box>
              <Box mr="25px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Custom Analysis</Text>
                <Text color="white">With our strong technical backgrounds and years of experience in the field, we offer the right analytics at the right time.</Text>
              </Box>
              <Box mr="70px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Guided Advisory</Text>
                <Text color="white">We offer projects continuous advisory even after launch to make sure they meet their long-term vision.</Text>
              </Box>
          </ActivityContainer>
          <ActivityContainer pink="03." title="Invest." mt="10">
              <Box mr="50px" mt="10px" >
                <Text color="white" fontWeight="bold" fontSize="xl">Early-Stage Capital</Text>
                <Text color="white">We offer projects early-stage capital so that they can prioritize building their products.</Text>
              </Box>
              <Box mr="50px" mt="10px"  >
                <Text color="white" fontWeight="bold" fontSize="xl">Long-Term Vision</Text>
                <Text color="white">We invest in projects because we believe in the products, their markets and their inner drive.</Text>
              </Box>
              <Box mr="250px" mt="-100px"  >
                <Text color="white" fontWeight="bold" fontSize="xl"></Text>
                <Text color="white"></Text>
              </Box>
          </ActivityContainer>
          <a id="Portfolio" />
        </Box>
        <Box className="pink-diagonal" backgroundColor="pink.700" p="2.1px">
        </Box>
        <Box className="dark-diagonal" backgroundColor="white" p="40px">
          <Box maxWidth="880px" m="0 auto">
          <Flex alignItems="center" left="-36px" position="relative">
              <Image src="images/svg/leaf.svg" mr="8px"/>
              <Heading color="gray.700" fontSize={["3xl", "4xl", "4xl", "4xl"]} fontFamily="Cairo">Our Selected Portfolio</Heading>
            </Flex>
            <ProjectOverview />
          </Box>
        </Box>
        <Box backgroundColor="gray.700">
          <Flex maxWidth="1200px" m="0 auto" direction="column" color="white" minHeight="150px" alignItems="center" justifyContent="center">
            <Flex mt="5">
              <Link href="https://twitter.com/treelabs_io" p="0 4px">Twitter</Link>
              <Link p="0 4px">Substack</Link>
            </Flex>
          </Flex>
        </Box>
      </main>
    </div>
  )
}
