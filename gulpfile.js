var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp
    .src("style.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ outputStyle: "expanded", sourceComments: "map" }).on(
        "error",
        sass.logError
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("style.scss", gulp.series("sass"));
});
