import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';


const list = defineStyle({
    th: {
        color: 'white',
    },
    td: {
        alignContent: 'center',
        textAlign: 'center',
    }
})

export const Tables = defineStyleConfig({
    variants: { list }
})


const Theme = extendTheme({
    colors: {
        primary: '#D63864',
        sidebar: '#000000',
        selected: '#5e5e5e',
        border: '#B8B8B8',
        borderDark: '#afafaf',
        success: '#61D836',
        successH: '#286113',
        error: '#ff644e',
        errorH: '#8E1100',

        danger: '#cf0403',
        dangerH: '#ef3433',

        turnSep: '#CD591A',
        turnSepOutline: '#7CF6DF',
        turnUnset: '#5E5E5E',

        turnNull: '#929292',
        turn1Bottom: '#7CACED',
        turn1Top: '#3954AF',
        turn2Bottom: '#7CF6DF',
        turn2Top: '#2A8C98',
        turn3Top: '#FF8A26',
        turn3Bottom: '#FFE46D',
        turn4Top: '#AF0328',
        turn4Bottom: '#FF8495',
        turn5Top: '#5A4A92',
        turn5Bottom: '#B8A0EC',
        turn6Top: '#c61bfe',
        turn6Bottom: '#ffbffe',

        timeOne: '#294177',
        timeTwo: '#83A8E4',
        partyOne: '#D3328B',
        partyTwo: '#EE8797',
        quantityOne: '#AD436C',
        quantityTwo: '#3B69CA',
    }, 
    components: {
        Button: {
            baseStyle: {
                w: '70px',
            },
            variants: {
                'not': {
                    color: 'white',
                    bgColor: 'error',
                    _hover: {
                        bgColor: 'errorH'
                    }
                },
                'ok': {
                    color: 'white',
                    bgColor: 'success',
                    _hover: {
                        bgColor: 'successH'
                    }
                },
                'submit': {
                    color: 'white',
                    bgColor: 'primary',
                }
            },
        },
        Table: Tables,

    }
});

export default Theme;