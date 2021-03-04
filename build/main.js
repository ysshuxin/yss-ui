const mainConfig = require("../config/webpack.main");
const webpack = require("webpack");
const libConfig = require("../config/webpack.lib");
const exec = require("child_process").exec;
const path = require("path");
const rm = require("rimraf");

rm(path.resolve(__dirname, "../lib"), err => {
  if (err) throw err;
  webpack(libConfig, (err, stats) => {
    console.log("开始编译---lib");
    if (err || stats.hasErrors()) {
      console.log(stats);
    }
    console.log(stats.toString());
  });
  webpack(mainConfig, (err, stats) => {
    console.log("开始编译---main");
    if (err || stats.hasErrors()) {
      console.log(stats);
    }
    console.log(stats.toString());
    exec(
      "cp " +
        path.resolve(__dirname, "../lib/index.js") +
        " " +
        path.resolve(__dirname, "../docs/"),
      (error, stdout, stderr) => {
        if (error) {
          console.error(`执行的错误: ${error}`);
          return;
        }
        console.log("文件复制完毕");
      }
    );
  });

});
