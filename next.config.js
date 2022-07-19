// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   target: 'serverless',
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       // use: {['@svgr/webpack']}
//       use: {
//         loader: 'file-loader',
//       },
//     });

//     return config;
//   },
// };

// // module.exports = nextConfig;

// const withTM = require('next-transpile-modules')([
//   'three',
//   'react-three-fiber',
//   'drei',
// ]);
// // module.exports = withTM();

// module.exports = withTM(nextConfig);

const withTM = require('next-transpile-modules')([
  'three',
  'react-three-fiber',
  'drei',
]);

module.exports = withTM({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
});
