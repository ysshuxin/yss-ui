
const exec = require('child_process').exec;



class HotBuild {
    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
        compiler.hooks.watchRun.tap('MyPlugin', (params) => {
            exec('yarn build',(error, stdout, stderr)=>{
                if (error) {
                    console.error(`执行的错误: ${error}`);
                    return;
                }
            })
        });
    }
}


module.exports=HotBuild
