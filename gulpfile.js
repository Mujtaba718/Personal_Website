var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	usemin = require("gulp-usemin"),
	rev = require("gulp-rev"),
	cssnano = require("gulp-cssnano"),
	uglify = require("gulp-uglify-es").default;

// Optimize Images 
gulp.task('imageMin', () => 
	gulp.src('assets/img/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('docs/assets/img'))
);

gulp.task('usemin', () => 
	gulp.src('index.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('docs'))
);

gulp.task('build', ['imageMin', 'usemin']); 
