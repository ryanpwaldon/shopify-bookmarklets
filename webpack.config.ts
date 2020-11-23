import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: {
    'variant-scraper': { import: './src/bookmarklets/variant-scraper/index.ts', filename: '[name].js' },
    'variant-logger': { import: './src/bookmarklets/variant-logger/index.ts', filename: '[name].js' }
  } as any,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}

export default config
