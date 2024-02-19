// TODO: update the design tokens to use an array
// export interface FontDesignToken {
//   value: Array<string>
// }
const fonts = {
    default: {
        variable: {
            value: `'InterVariable', 'Inter var', 'Inter', -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
        sans-serif`,
        },
        static: {
            value: `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
        'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif`,
        },
    },
};

export { fonts };
