import { Button, Link, Tag, TagLabel, TagRightIcon} from '@chakra-ui/react'
import { LinkIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'

function BlogTag({backgroundColor, href, children}) {
    return (
        <NextLink href={href} passHref>
        <Link>
            <Tag mr="2" backgroundColor={backgroundColor} _hover={{backgroundColor: "gray.100"}}>
                <TagLabel>{children}</TagLabel>
                <TagRightIcon as={LinkIcon}/>
            </Tag>
        </Link>
        </NextLink>
    )
}

export default BlogTag