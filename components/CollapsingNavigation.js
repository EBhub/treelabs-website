import { chakra, Flex, Link, Center, Heading, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link"

function CollapsingNavigation() {
    return (
        <Flex position="sticky" zIndex="10" backgroundColor="white" pb="20px" top="0" m="0px auto" mb="5" alignItems="center" direction={["column", "column", "row"]}>
            <Link href="/" _hover={{textDecoration:"none"}}>
            <Center mt="5" ml="5" mr="5">
                <Image
                src="/images/logo2.svg" 
                alt="TREE LABS"
                height={[50, 50, 53]} />
                <Heading fontSize={["4xl", "4xl", "5xl"]} color="gray.700" fontFamily="cairo">
                Tree
                <chakra.span color="pink.700" fontFamily="cairo">Labs</chakra.span>
                </Heading>
            </Center>
            </Link>
            <Spacer />
            <Flex alignItems='center' mt="4" ml="5" mr="5" justifyContent='center' fontWeight="bold" fontSize={["l", "xl", "xl"]}>
              <Link href="../#About" className="nav-link" mr="5" _hover={{"text-decoration":"none"}}>About</Link>
              <Link href="../#Portfolio" className="nav-link" mr="5" _hover={{"text-decoration":"none"}}>Portfolio</Link>
              <Link href="/blog" className="nav-link" mr="5" _hover={{"text-decoration":"none"}}>Writing</Link>
              <Link href="mailto:contact@treelabs.io" className="nav-link" _hover={{"text-decoration":"none"}}>Contact</Link>
          </Flex>
        </Flex>
    );
}

export default CollapsingNavigation;