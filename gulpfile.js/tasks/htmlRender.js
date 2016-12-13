var config       = require('../config')
if(!config.tasks.htmlRender) return

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

var exclude = path.normalize('!**/{' + config.tasks.htmlRender.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.htmlRender.src, '/**/*.{' + config.tasks.htmlRender.extensions + '}'), exclude],
  dest: path.join(config.root.dest, config.tasks.htmlRender.dest),
}

var getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.htmlRender.src, config.tasks.htmlRender.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

var htmlRenderTask = function() {
  return gulp.src(path.join(config.root.src, config.tasks.htmlRender.src, '/index.njk'))
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render({
      path: [path.join(config.root.src, config.tasks.htmlRender.src)],
      envOptions: {
        watch: false
      }
    }))
    .on('error', handleErrors)
    .pipe(gulpif(global.production, htmlmin(config.tasks.htmlRender.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
}

gulp.task('htmlRender', htmlRenderTask)
module.exports = htmlRenderTask;
