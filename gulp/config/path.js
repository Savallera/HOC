const pathSrc = './src';
const pathDest = './dist';

export default {
  root: pathDest,

  html: {
    src: pathSrc + '/pages/*.html',
    watch: [pathSrc + '/pages/*.html', pathSrc + '/blocks/**/*.html'],
    dest: pathDest,
  },

  styles: {
    src: pathSrc + '/styles/*.scss',
    watch: [
      pathSrc + '/styles/*.scss',
      pathSrc + '/styles/**/*.scss',
      pathSrc + '/blocks/**/*.scss',
    ],
    dest: pathDest + '/styles',
  },

  stylesLibs: {
    src: pathSrc + '/styles/libs/*.css',
    watch: [
      pathSrc + '/styles/libs/*.css',
    ],
    dest: pathDest + '/styles/libs',
  },

  scripts: {
    src: [
      pathSrc + '/scripts/*.js',
      pathSrc + '/blocks/**/*.js',
      '!' + pathSrc + '/scripts/libs/*.js',
    ],
    watch: [pathSrc + '/scripts/*.js', pathSrc + '/blocks/**/*.js'],
    dest: pathDest + '/scripts',
  },

  scriptsLibs: {
    src: [pathSrc + '/scripts/libs/*.js'],
    watch: [pathSrc + '/scripts/libs/*.js'],
    dest: pathDest + '/scripts/libs',
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
