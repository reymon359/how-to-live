const collman = require('collman');

const config = {
  inputType: 'markdown',
  outputType: 'markdown',
  pathRootDirectory: '/Users/ramonmorcillo/Documents/developer/how-to-live/',
  inputDirectory: 'advices',
  outputDirectory: 'docs',
  docsify: true
}

const  main = () => {
  collman(config)
}

main()
