export default () => ({
  HOST: process.env.host || '0.0.0.0',
  PORT: process.env.PORT || 3000,
});
