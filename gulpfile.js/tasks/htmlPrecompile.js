var config       = require('../config')
if(!config.tasks.htmlPrecompile) return

var browserSync  = require('browser-sync')
var data         = require('gulp-data')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin      = require('gulp-htmlmin')
var path         = require('path')
var render       = require('gulp-nunjucks-render')
var nunjucks     = require('gulp-nunjucks');
var concat       = require('gulp-concat');
var fs           = require('fs')

var paths = {
  src: [path.join(config.root.src, config.tasks.htmlPrecompile.src, '/**/*.{' + config.tasks.htmlPrecompile.extensions + '}')],
  dest: path.join(config.root.dest, config.tasks.htmlPrecompile.dest),
}

var getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.htmlPrecompile.src, config.tasks.htmlPrecompile.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

var htmlPrecompileTask = function() {
  var precompilePath = path.join(config.root.src, config.tasks.htmlPrecompile.src, '/**/*.{' + config.tasks.htmlPrecompile.extensions + '}');
    return gulp.src(precompilePath)
      .pipe(data(getData))
      .on('error', handleErrors)
      .pipe(nunjucks.precompile())
      .on('error', handleErrors)
      //.pipe(gulpif(global.production, htmlmin(config.tasks.htmlPrecompile.htmlmin)))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(paths.dest))
      .on('end', browserSync.reload)

}

gulp.task('htmlPrecompile', htmlPrecompileTask);
module.exports = htmlPrecompileTask;
