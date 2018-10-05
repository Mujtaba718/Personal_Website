var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	del = require("del"),	
	usemin = require("gulp-usemin"),
	rev = require("gulp-rev"),
	cssnano = require("gulp-cssnano"),
	uglify = require("gulp-uglify-es").default;

gulp.task('deleteDocsFolder', function() {
	return del("./docs")
})

// Optimize Images 
gulp.task('imageMin', ['deleteDocsFolder'], () => 
	gulp.src('assets/img/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('docs/assets/img'))
);

gulp.task('usemin', ['deleteDocsFolder'], () => 
	gulp.src('index.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('docs'))
);

gulp.task('build', ['deleteDocsFolder', 'imageMin', 'usemin']); 
