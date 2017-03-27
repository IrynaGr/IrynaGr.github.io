var gulp = require('gulp'),
  sass = require('gulp-sass'), //Подключаем Sass пакет
  browserSync = require('browser-sync'), // Подключаем Browser Sync
  concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
  uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
  cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
  rename = require('gulp-rename'), // Подключаем библиотеку для переименования
  del = require('del'), // Подключаем библиотеку для удаления файлов и папок
  imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
  pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
  cache = require('gulp-cache') // Подключаем библиотеку кеширования
  autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
  spritesmith = require('gulp.spritesmith');// Подключаем библиотеку для автоматического добавления префиксов



  gulp.task('scss', function(){ // Создаем таск Scss
    return gulp.src('app/scss/**/*.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass.
    .pipe(concat('style.css'))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
    .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку dist/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
  });

  gulp.task('js', function(){ // Создаем таск js
    return gulp.src('app/js/**/*.js') // Берем источник
    .pipe(concat('script.min.js')) // Собираем их в кучу в новом файле script.min.js
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('dist/js')) // Выгружаем результата в папку
    .pipe(browserSync.reload({stream: true})) // Обновляем js на странице при изменении
  });

  gulp.task('css', function () {
    return gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
  });

  gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
    .pipe(cache(imagemin({ /// Сжимаем их с наилучшими настройками с учетом кеширования
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
    .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
  });

  gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
  });

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browser Sync
    server: { // Определяем параметры сервера
      baseDir: 'dist' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
  return gulp.src([ // Берем все необходимые библиотеки
    'app/libs/jquery.min.js', // Берем jQuery
    'app/libs/jquery.magnific-popup.min.js' // Берем Magnific Popup
  ])
  .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
  .pipe(uglify()) // Сжимаем JS файл
  .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/for_sprite/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    algoritm: 'left-right'
  }));
  spriteData.img.pipe(gulp.dest('app/img/sprites'));
  spriteData.css.pipe(gulp.dest('app/scss/'));
});

gulp.task('watch', ['browser-sync', 'scss', 'css', 'html', 'js', 'img', 'fonts', 'scripts'], function() {
  gulp.watch('app/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами в папке sass
  gulp.watch('app/css/**/*.css', ['css']);
  gulp.watch('app/img/**/*.*', ['img']);
  gulp.watch('app/fonts/**/*.*', ['fonts']);
  gulp.watch('app/*.html', ['html'], browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('app/js/**/*.js', ['js'], browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});


gulp.task('build', ['scss', 'css', 'html', 'js', 'scripts']);

gulp.task('default', ['watch']);

gulp.task('clear', function () {
  return cache.clearAll();
});