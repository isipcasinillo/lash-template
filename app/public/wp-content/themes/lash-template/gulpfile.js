/**
 *
 * How to use this file
 *
 * Step 1: Ensure Gulp CLI is installed globally
 *		     npm install gulp-cli -g
 * Step 2: Install BrowserSync and Gulp as a local development dependency for the project. In most cases either the plugin or the theme directory that you're working in
 *         npm install browser-sync gulp --save-dev
 * Step 3: Save this file to the directory and edit where appropriate
 * Step 4: Type glup in the command line to initiate BrowserSync
 *
 * Credit goes to https://sridharkatakam.com/browsersync-in-laravel-valet/
 *
 **/
// Require our dependencies.
var browserSync = require('browser-sync').create();
var gulp = require('gulp');

var siteName = 'lashestemplate'; // set your siteName here

// Set assets paths.
var paths = {
    php: ['*.php', '**/*.php'],
    scripts: ['js/*.js'],
    styles: ['*.css', 'css/*.css']
};

/**
 * Reload browser after PHP & JS file changes and inject CSS changes.
 *
 * https://browsersync.io/docs/gulp
 */
gulp.task('default', function () {
    browserSync.init({
        proxy: 'http://' + siteName + '.local',
        host: siteName + '.local',
        open: 'external',
        port: 8000

    });

    gulp.watch(paths.php).on('change', browserSync.reload);
    gulp.watch(paths.scripts).on('change', browserSync.reload);

    gulp.watch(paths.styles, function () {
        gulp.src(paths.styles).pipe(browserSync.stream());
    });
});