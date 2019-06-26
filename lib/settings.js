exports.options = {
  // folder determines in which path to drop the generated file
  // prefix is the first part of the generated file's name
  // infix adds e.g. '44x44' based on the size in sizes to the generated file's name
  // suffix adds a file-ending to the generated file's name
  // sizes determines the pixel width and height to use
  background_color: '#000074',
  theme_color: '#02aa9b',
  sharp: 'kernel: sharp.kernel.lanczos3', // one of [nearest|cubic|lanczos2|lanczos3]
  minify: {
    batch: false,
    overwrite: true,
    available: ['pngcrush', 'pngquant', 'optipng', 'zopfli'],
    type: 'pngquant',
    pngcrushOptions: {
      reduce: true
    },
    pngquantOptions: {
      quality: [0.6, 0.8],
      floyd: 0.1, // 0.1 - 1
      speed: 10 // 1 - 10
    },
    optipngOptions: {
      optimizationLevel: 4,
      bitDepthReduction: true,
      colorTypeReduction: true,
      paletteReduction: true
    },
    pngoutOptions: {
      // we use pngOut as a proxy to avoid minification
      // not sure WHY anyone would want that, but hey - it's up to you. ;)
      strategy: 4 // 0. Extreme 1. Intense 2. Longest match 3. Huffman only 4. Uncompressed
    },
    zopfliOptions: {
      transparent: true,
      more: true
    }
  },
  svg: {
    //
    png_threshold: 200,
    svg_threshold: 255,
    turdSize: 255,
    optTolerance: 255
  },
  splash_type: 'generate', // for cordova, one of [generate | overlay | pure]

  // below this line are all of the icon settings
  spa: {
    favicon: {
      folder: 'icons',
      prefix: 'favicon-',
      infix: true,
      suffix: '.png',
      sizes: [ 16, 32, 96 ]
    },
    icons: {
      folder: 'icons',
      prefix: 'icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        128,
        192,
        256,
        384,
        512
      ]
    },
    quasar: {
      folder: '.',
      prefix: 'app-logo-',
      infix: true,
      suffix: '.png',
      sizes: [
        128
      ]
    },
    appleIcons: {
      folder: 'icons',
      background: true,
      prefix: 'apple-icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        120, 152, 167, 180
      ]
    },
    windows: {
      folder: 'icons',
      prefix: 'ms-icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        144
      ]
    }
  },
  pwa: {
    favicon: {
      folder: 'icons',
      prefix: 'favicon-',
      infix: true,
      suffix: '.png',
      sizes: [
        16, 32, 96
      ]
    },
    icons: {
      folder: 'icons',
      prefix: 'icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        128,
        192,
        256,
        384,
        512
      ]
    },
    quasar: {
      folder: '.',
      prefix: 'app-logo-',
      infix: true,
      suffix: '.png',
      sizes: [
        128
      ]
    },
    appleIcons: {
      folder: 'icons',
      background: true,
      prefix: 'apple-icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        120, 152, 167, 180
      ]
    },
    windows: {
      folder: 'icons',
      prefix: 'ms-icon-',
      infix: true,
      suffix: '.png',
      sizes: [
        144
      ]
    }
  },
  cordova: {
    android_icon_ldpi: {
      platform: 'android',
      density: 'ldpi',
      background: false,
      folder: 'android',
      prefix: 'icon-36-ldpi',
      infix: false,
      suffix: '.png',
      sizes: [
        36
      ]
    },
    android_icon_mdpi: {
      platform: 'android',
      density: 'mdpi',
      background: false,
      folder: 'android',
      prefix: 'icon-48-mdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        48
      ]
    },
    android_icon_hdpi: {
      platform: 'android',
      density: 'hdpi',
      background: false,
      folder: 'android',
      prefix: 'icon-72-hdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        72
      ]
    },
    android_icon_xhdpi: {
      platform: 'android',
      density: 'xhdpi',
      background: false,
      folder: 'android',
      prefix: 'icon-96-xhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        96
      ]
    },
    android_icon_xxhdpi: {
      platform: 'android',
      density: 'xxhdpi',
      background: false,
      folder: 'android',
      prefix: 'icon-144-xxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        144
      ]
    },
    android_icon_xxxhdpi: {
      platform: 'android',
      density: 'xxxhdpi',
      background: false,
      folder: 'android',
      prefix: 'icon-192-xxxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        192
      ]
    },
    ios_icon_57: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon',
      infix: false,
      suffix: '.png',
      sizes: [
        57
      ]
    },
    ios_icon_57_x2: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        114
      ]
    },
    ios_icon_40: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-40',
      infix: false,
      suffix: '.png',
      sizes: [
        40
      ]
    },
    ios_icon_40_x2: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-40-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        80
      ]
    },
    ios_icon_50: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-50',
      infix: false,
      suffix: '.png',
      sizes: [
        50
      ]
    },
    ios_icon_50_x2: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-50-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        100
      ]
    },
    ios_icon_60: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-60',
      infix: false,
      suffix: '.png',
      sizes: [
        60
      ]
    },
    ios_icon_60_x2: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-60-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        120
      ]
    },
    ios_icon_60_x3: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-60-3x',
      infix: false,
      suffix: '.png',
      sizes: [
        180
      ]
    },
    ios_icon_72: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-72',
      infix: false,
      suffix: '.png',
      sizes: [
        72
      ]
    },
    ios_icon_72_x2: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-72-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        144
      ]
    },
    'ios_icon_83.5_x2': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-83.5-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        167
      ]
    },
    ios_icon_167: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-167',
      infix: false,
      suffix: '.png',
      sizes: [
        167
      ]
    },
    ios_icon_1024: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-1024',
      infix: false,
      suffix: '.png',
      sizes: [
        1024
      ]
    },
    ios_icon_20: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-20',
      infix: false,
      suffix: '.png',
      sizes: [
        20
      ]
    },
    'ios_icon_24-2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-24@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        48
      ]
    },
    'ios_icon_27.5@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-27.5@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        55
      ]
    },
    ios_icon_29: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-29',
      infix: false,
      suffix: '.png',
      sizes: [
        29
      ]
    },
    'ios_icon_29@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-29@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        58
      ]
    },
    'ios_icon_29@3x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-29@3x',
      infix: false,
      suffix: '.png',
      sizes: [
        87
      ]
    },
    'ios_icon_44@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-44@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        88
      ]
    },
    ios_icon_76: {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-76',
      infix: false,
      suffix: '.png',
      sizes: [
        76
      ]
    },
    'ios_icon_76@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-76@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        152
      ]
    },
    'ios_icon_88@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-88@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        176
      ]
    },
    'ios_icon_98@2x': {
      platform: 'ios',
      background: true,
      folder: 'ios',
      prefix: 'icon-98@2x',
      infix: false,
      suffix: '.png',
      sizes: [
        196
      ]
    },
    android_screen_ldpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-ldpi-landscape',
      density: 'land-ldpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          320,
          200
        ]
      ]
    },
    android_screen_ldpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-ldpi-portrait',
      density: 'port-ldpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          200,
          320
        ]
      ]
    },
    android_screen_mdpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-mdpi-landscape',
      density: 'land-mdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          480,
          320
        ]
      ]
    },
    android_screen_mdpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-mdpi-portrait',
      density: 'port-mdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          320,
          480
        ]
      ]
    },
    android_screen_hdpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-hdpi-landscape',
      density: 'land-hdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          800,
          480
        ]
      ]
    },
    android_screen_hdpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-hdpi-portrait',
      density: 'port-hdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          480,
          800
        ]
      ]
    },
    android_screen_xhdpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xhdpi-landscape',
      density: 'land-xhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1280,
          720
        ]
      ]
    },
    android_screen_xhdpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xhdpi-portrait',
      density: 'port-xhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          720,
          1280
        ]
      ]
    },
    android_screen_xxhdpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xxhdpi-landscape',
      density: 'land-xxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1600,
          960
        ]
      ]
    },
    android_screen_xxhdpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xxhdpi-portrait',
      density: 'port-xxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          960,
          1600
        ]
      ]
    },
    android_screen_xxxhdpi_landscape: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xxxhdpi-landscape',
      density: 'land-xxxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1920,
          1280
        ]
      ]
    },
    android_screen_xxxhdpi_portrait: {
      platform: 'android',
      splash: true,
      folder: 'screen/android',
      prefix: 'screen-xxxhdpi-portrait',
      density: 'port-xxxhdpi',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1280,
          1920
        ]
      ]
    },
    ios_screen_ipad_landscape: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-ipad-landscape',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1024,
          768
        ]
      ]
    },
    ios_screen_ipad_landscape_x2: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-ipad-landscape-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          2048,
          1536
        ]
      ]
    },
    ios_screen_ipad_portrait: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-ipad-portrait',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          768,
          1024
        ]
      ]
    },
    ios_screen_ipad_portrait_x2: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-ipad-portrait-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1536,
          2048
        ]
      ]
    },
    ios_screen_iphone_landscape: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-iphone-landscape',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          480,
          320
        ]
      ]
    },
    ios_screen_iphone_landscape_x2: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-iphone-landscape-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          960,
          640
        ]
      ]
    },
    ios_screen_iphone_portrait: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-iphone-portrait',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          320,
          480
        ]
      ]
    },
    ios_screen_iphone_portrait_x2: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-iphone-portrait-2x',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          640,
          960
        ]
      ]
    },
    ios_screen_iphone_portrait_568h_2x: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'screen-iphone-portrait-568h_2x',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          640,
          1136
        ]
      ]
    },
    ios_default_667h: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default-667h',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          750,
          1334]
      ]
    },
    ios_default_736h: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default-736h',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1242,
          2208]
      ]
    },
    ios_default_landscape_736h: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default-Landscape-736h',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          2208,
          1242
          ]
      ]
    },
    ios_default_2436h: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default-2436h',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          1125,
          2436
        ]
      ]
    },
    ios_default_landscape_2436h: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default-Landscape-2436h',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          2436,
          1125
        ]
      ]
    },
    ios_default_huge: {
      platform: 'ios',
      splash: true,
      folder: 'screen/ios',
      prefix: 'Default@2x~universal~anyany',
      infix: false,
      suffix: '.png',
      sizes: [
        [
          2732,
          2732]
      ]
    },
  },
  electron: {
    defaults: {
      folder: '.',
      prefix: 'icon',
      infix: false,
      suffix: '.png',
      sizes: [
        512
      ]
    },
    appx_logo: {
      folder: '.',
      prefix: 'StoreLogo',
      infix: false,
      suffix: '.png',
      sizes: [
        50
      ]
    },
    appx_square: {
      folder: '.',
      prefix: 'Square',
      infix: true,
      suffix: 'Logo.png',
      sizes: [
        30,
        44,
        71,
        89,
        107,
        142,
        150,
        284,
        310
      ]
    },
    linux: {
      folder: '.',
      prefix: 'linux-',
      infix: true,
      suffix: '.png',
      sizes: [
        512,
        128,
        96,
        64,
        48,
        32,
        24,
        16
      ]
    }
  }
}
