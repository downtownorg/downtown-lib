const gulp = require("gulp");
const gulpless = require("gulp-less");
const postcss = require("gulp-postcss");
const debug = require("gulp-debug");
const cleanCss = require("gulp-clean-css");
const autoprefixer = require("autoprefixer");
const NpmImportPlugin = require("less-plugin-npm-import");
const csso = require("gulp-csso");

gulp.task("less", function () {
    const plugins = [autoprefixer()];

    return gulp
        .src(["src/styles/dark.less", "src/styles/light.less"])
        .pipe(debug({ title: "Less files:" }))
        .pipe(
            gulpless({
                javascriptEnabled: true,
                plugins: [new NpmImportPlugin({ prefix: "~" })],
            }),
        )
        .pipe(postcss(plugins))
        .pipe(cleanCss())
        .pipe(
            csso({
                debug: true,
            }),
        )
        .pipe(gulp.dest("./styles"));
});

exports.sync = gulp.series("less");
