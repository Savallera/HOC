const pathSrc = './src';
const pathDest = './dist';

export default {
  root: pathDest,

  html: {
    src: pathSrc + '/pages/*.html',
    watch: [pathSrc + '/pages/*.html', pathSrc + '/blocks/**/*.html'],
    dest: pathDest,
  },

  scss: {
    src: pathSrc + '/styles/*.scss',
    watch: [
      pathSrc + '/styles/*.scss',
      pathSrc + '/styles/**/*.scss',
      pathSrc + '/blocks/**/*.scss',
    ],
    dest: pathDest + '/styles',
  },

  scripts: {
    src: pathSrc + '/scripts/*.js',
    watch: [
      pathSrc + '/scripts/*.js',
      pathSrc + '/scripts/**/*.js',
      pathSrc + '/blocks/**/*.js',
    ],
    dest: pathDest + '/scripts',
  },

  images: {
    src: [
      pathSrc + '/images/*.*',
      pathSrc + '/images/**/*.*',
      '!' + pathSrc + '/images/icons/*.svg',
      '!' + pathSrc + '/images/favicon.svg',
      '!' + pathSrc + '/images/*.ico',
      '!' + pathSrc + '/images/apple-touch-icon.png',
    ],
    watch: [
      pathSrc + '/images/*.*',
      pathSrc + '/images/**/*.*',
      '!' + pathSrc + '/images/icons/*.svg',
      '!' + pathSrc + '/images/favicon.svg',
      '!' + pathSrc + '/images/*.ico',
      '!' + pathSrc + '/images/apple-touch-icon.png',
    ],
    dest: pathDest + '/images',
  },

  favicon: {
    src: [
      '!' + pathSrc + '/images/*.ico',
      pathSrc + '/images/favicon.svg',
      pathSrc + '/images/apple-touch-icon.png',
    ],
    watch: [
      '!' + pathSrc + '/images/*.ico',
      pathSrc + '/images/favicon.svg',
      pathSrc + '/images/apple-touch-icon.png',
    ],
    dest: pathDest + '/images/favicon',
  },

  svgSprite: {
    src: [pathSrc + '/images/icons/*.svg'],
    watch: [pathSrc + '/images/icons/*.svg'],
    dest: pathDest + '/images',
  },

  fonts: {
    src: [pathSrc + '/fonts/**/*'],
    watch: [pathSrc + '/fonts/**/*'],
    dest: pathDest + '/fonts',
  },

  files: {
    src: [pathSrc + '/files/**/*'],
    watch: [pathSrc + '/files/**/*'],
    dest: pathDest + '/files',
  },
};
