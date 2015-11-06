module.exports = {
    watch: false,
    prod: false,
    src: 'source/',
    dest: './output/',
    patternLibrary: 'source/pattern-library/',
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false // WARNING: Experimental
};
