/*
 *--------------------------------------------------------------------------
 * Imagemin config file
 *--------------------------------------------------------------------------
 *
 * For information about the options:
 * https://www.npmjs.com/package/parcel-plugin-imagemin
 * https://github.com/imagemin/imagemin
 *
 */

module.exports = {
    gifsicle: { optimizationLevel: 2, interlaced: false, colors: 256 },
    mozjpeg: { progressive: true, quality: 80 },
    pngquant: { quality: [0.6, 0.8] },
    svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
    },
    webp: { quality: 80 },
};
