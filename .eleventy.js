const htmlmin = require('html-minifier');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({'resources/assets/images/favicons' : '/'});
    eleventyConfig.addPassthroughCopy('robots.txt');

    if( isProduction ) {
        eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
            if( outputPath.endsWith('.html') ) {
            let minified = htmlmin.minify(content, {
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
            }

            return content;
        });
    }

    return {
        dir: {
            input: 'resources',
            output: 'dist',
            includes: 'views/partials',
            layouts: 'views/layouts',
            data: '_data',
        },
        templateFormats: ['html', 'md', 'njk'],
        passthroughFileCopy: true,
    };
};
