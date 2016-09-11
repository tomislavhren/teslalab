/// <binding BeforeBuild='clean:css, min:css' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");
    //swPrecache = require('sw-precache'),
    //path = require('path');

var paths = {
    root: "./tesla-lab/"
};

paths.js = paths.root + "app/**/*.controller.js";
paths.minJs = paths.root + "app/**/*.min.js";
paths.css = paths.root + "app/**/*.css";
paths.minCss = paths.root + "app/**/*.min.css";
paths.concatJsDest = paths.root + "app/site/site.min.js";
paths.concatCssDest = paths.root + "app/site/site.min.css";

var jsForMin = [
    "app/index.module.js",
    "app/index.routes.js",
    "app/index.config.js",
    "app/index.run.js",
    "app/index.constants.js",
    "app/index.controller.js",
    "app/**/*.js"
];

var cssForMin = [
    "app/index.css",
    "app/**/*.css"
]

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);
/*[paths.js, "!" + paths.minJs]*/
gulp.task("min:js", function () {
    return gulp.src(jsForMin, { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});
/*[paths.css, "!" + paths.minCss]*/
gulp.task("min:css", function () {
    return gulp.src(cssForMin)
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

//gulp.task('generate-service-worker', function (callback) {
//    var rootDir = 'app';

//    swPrecache.write(path.join(rootDir, 'sw.js'), {
//        staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
//        stripPrefix: rootDir
//    }, callback);
//});