// Enable VSCode highlighting 
const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: [
        preprocess({
            scss: {
                includePaths: ['src'],
                data: `
                @import 'src/styles/core/variables';
                @import 'src/styles/core/functions';
                @import 'src/styles/core/mixins';
            `,
            },
        }),
    ],
    // ...other svelte options
};

