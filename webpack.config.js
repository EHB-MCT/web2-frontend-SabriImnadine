const path = require('path');

module.exports = {
  entry:{
   index: './src/index.js',
  challenges : './src/challeges.js',
  login : './src/login.js',
  register: './src/register.js',
  play_challenge: './src/play-challenge.js'
  } ,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development',
  watch: true


};
