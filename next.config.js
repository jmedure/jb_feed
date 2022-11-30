/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
                'login.lyricallemonade.com',
                'notion.so',
                'upload.wikimedia.org',
                'cdn.shopify.com',
                'is2-ssl.mzstatic.com',
                'https://images.unsplash.com'
              
    ],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    }

    config.resolve = {
      ...config.resolve,

      fallback: {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        // 'builtin-modules': false,
        // worker_threads: false,
      },
    }

    return config
  },
}
