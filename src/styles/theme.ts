import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({

    colors: {
        black: '#141414',
        gray: '#737271',
        white: '#F2F1F0',
        red: '#FF5A3A',
        yellow: '#FFAF20',
        blue: '#283FFF',

        glass: '#73727122',
        whiteGlass: '#F2F1F066',
    },

    fonts: {
        body: 'Epilogue',
        heading: 'Dela Gothic One'
    },

    styles: {
        global: {
            body: {
                bg: 'black',
                color: 'white',
                width: '100vw',
                overflowX: 'hidden'
            }
        }
    },

    components: {

        Heading: {
            baseStyle: {
                fontWeight: 'normal',
                letterSpacing: 'tight'
            }
        },

        Container: {
            baseStyle: {
                maxWidth: '1200px',
            }
        },

        Text: {
            baseStyle: {
                letterSpacing: 'tight'
            },

            variants: {
                'gradient': {                    
                    bgGradient: 'linear(to-r, blue, red)',
                    bgClip: 'text',
                }
            }
        },

        Flex: {
            defaultProps: {
                sx: {
                    '&::-webkit-scrollbar': {
                        width: '10px',
                        height: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        bg: 'black',
                        overflow: 'hidden',
                        borderRadius: '7px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        bg: 'gray',
                        borderRadius: '10px',
                        border: '4px solid black',
                    }
                }
            }
        },

        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none'
                }   
            }
        },

    }

})

export default theme;