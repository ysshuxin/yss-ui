const mainConfig =require('../config/webpack.main')
const webpack = require('webpack');
const libConfig=require('../config/webpack.lib')
const exec = require('child_process').exec;
const path=require('path')
webpack([libConfig,mainConfig],(err, stats)=>{
    console.log('开始编译')
    if (err || stats.hasErrors()) {
        console.log(stats)
    }
    exec('cp '+path.resolve(__dirname,'../lib/index.js')+' '+ path.resolve(__dirname,'../docs/'),(error, stdout, stderr)=>{
        if (error) {
            console.error(`执行的错误: ${error}`);
            return;
        }
    })


})
