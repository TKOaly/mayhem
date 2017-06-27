module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Mayhem',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/de ployment/
   */
  deploy : {
    production : {
      user : 'mayhem',
      host : 'mayhem@haba.tko-aly.fi',
      ref  : 'origin/master',
      "pre-deploy-local" : "whoami",
      repo : 'git@github.com:TKOaly/mayhem.git',
      path : '/home/mayhem/mayhem',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
