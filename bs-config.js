/*
 *--------------------------------------------------------------------------
 * Browser-sync config file
 *--------------------------------------------------------------------------
 *
 * For information about the options:
 * http://www.browsersync.io/docs/options/
 *
 */

module.exports = {
    server: 'dist',
    injectChanges: true,
    // files: ['dist/*'],
    files: [
        'dist/assets/**/*.css',
        'dist/assets/**/*.js',
        'dist/**/*.html',
    ],
    open: false,
    ghostMode: {
        clicks: true,
        scroll: true,
        forms: false,
    },
};
