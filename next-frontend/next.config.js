module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
          aggregateTimeout: 300, // Reduce unnecessary rebuilds
        };
      }
      return config;
    },
  };
  