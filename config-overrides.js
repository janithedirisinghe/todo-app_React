const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  })
);
