/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Configure transpilation of node_modules
  transpilePackages: [
    'react-native',
    'expo',
    '@expo/vector-icons',
    'react-native-web',
    '@react-native-async-storage/async-storage',
    'react-native-safe-area-context',
    'react-native-screens',
    'react-native-reanimated',
    'expo-linking',
    'expo-constants',
    'expo-status-bar',
    'expo-web-browser',
    'expo-router',
  ],

  // Configure webpack for handling native modules
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig;
