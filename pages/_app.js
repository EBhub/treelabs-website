import { ChakraProvider, extendTheme} from '@chakra-ui/react'

import "prismjs/themes/prism-tomorrow.min.css"
import '../styles/globals.css'
import '@fontsource/cairo/700.css'
import '@fontsource/cairo/500.css'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  blue: {
    300: '#4299E1',
    900: '#76E4F7'
  },
  gray: {
    700: '#2D3748'
  },
  teal: {
    900: '#81E6D9'
  },
  pink: {
    700: '#ED64A6',
    900: '#FF44CC'
  }
}

const fonts = {
  Heading: 'Cairo',
  body: 'Cairo',
}

const components = {
  Text: {
    baseStyle: {
      color: 'gray.700'
    }
  }
}

const theme = extendTheme({ colors, fonts, components })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
