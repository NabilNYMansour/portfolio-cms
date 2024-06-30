module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'noreply@nabilmansour.com',
        defaultReplyTo: 'nabilmansour1999@gmail.com',
      },
    },
  },
  // ...
});