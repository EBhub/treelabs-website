import { Box, Flex, Heading } from "@chakra-ui/react";

function ActivityContainer({pink, title, children, ...props}) {
    return (
        <Box maxWidth="900px" m="0 auto" mt="5" p="20px" {...props}>
            <Flex alignItems="flex-end" left="-40px" position="relative">
              <Box className="pink-num">{pink}</Box>
              <Heading color="white" fontSize={["3xl", "4xl", "4xl", "4xl"]} fontFamily="Cairo">{title}</Heading>
            </Flex>
            <Flex mt="2" direction={['column', 'column', 'row', 'row']}>
                {children}
            </Flex>
        </Box>
    );
}

export default ActivityContainer;