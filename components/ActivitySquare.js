import Head from 'next/head'
import NextLink from 'next/link'
import { chakra, Heading, Text, Flex, Spacer, Box, Image, Center, Link, Icon, propNames } from '@chakra-ui/react'
import CollapsingNavigation from "../components/CollapsingNavigation"
import {RiRocket2Fill} from "react-icons/ri"
import {IoIosArrowForward} from 'react-icons/io'

function ActivitySquare(props) {
    return (
        <Flex height="70px" width={["350px", "450px", "450px"]} boxShadow={"0 0 11px rgba(33,33,33,.2)"} 
            transi
            _hover={{
                "box-shadow" : "0 0 20px rgba(33,33,33,.4)"
            }}
                  m="5"
                  backgroundColor="white"  alignItems={"center"} justifyContent='space-between'>
                    <Flex justifyContent="center" alignItems="center" height="100%" backgroundColor="gray.700" width="70px">
                      <Icon as={props.icon} w={5} h={5} color="white" />
                    </Flex>
                  {props.children}
                  <Icon as={IoIosArrowForward} w={5} h={5} color="gray.700" mr="5" />
        </Flex>
    );
}

export default ActivitySquare;