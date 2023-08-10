/** @type { import('@storybook/react').Preview } */

import theme from '../src/theme/theme'

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        chakra: {
            theme,
        }
    },
};

export default preview;