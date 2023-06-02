/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
module.exports = {
    images: {
      loader: 'akamai',
      path: '',
    },
  }

module.exports = nextConfig
