const { join } = require('path');
const Zip = require('adm-zip');

const distZip = new Zip();

distZip.addLocalFolder(join(__dirname, '../dist'));
distZip.writeZip(join(__dirname, '../dist.zip'));
