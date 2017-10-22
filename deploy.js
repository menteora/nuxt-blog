var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()
const path = require('path')

var config = {
  username: 'myusername',
  password: 'mypassword', // optional, prompted if none given
  host: 'ftp.myhost.com',
  port: 21,
  localRoot: path.join(__dirname, '/dist'),
  remoteRoot: '/public_html/nuxt/'
}

ftpDeploy.deploy(config, function (err) {
  if (err) console.log(err)
  else console.log('finished')
})

ftpDeploy.on('uploading', function (data) {
  data.totalFileCount // total file count being transferred
  data.transferredFileCount // number of files transferred
  data.percentComplete // percent as a number 1 - 100
  data.filename // partial path with filename being uploaded
})
ftpDeploy.on('uploaded', function (data) {
  console.log(data) // same data as uploading event
})
