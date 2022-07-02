import { Button, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function GradientButton({href, children, ...rest}) {
    return (
        <NextLink href={href} passHref>
            <Link >
                <Button 
                    {...rest}
                    href={href} 
                    color='white' 
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    opacity='1'
                    _hover={{opacity: '0.8'}}
                >{children}</Button>
            </Link>
        </NextLink>
    )
}

export default GradientButton