var webpack = require('webpack');
module.exports = {
    //页面入口文件配置 （html文件引入唯一的js 文件）
    entry:{
        main:'./src/index.js'
    },
    //对应输出项配置
    output:{
        path:path.join(_dirname,'dist'), //入口文件最终要输出到哪里
        filename:'[name].[hash:8].bundle.js', //输出文件的名称
        publicPath:''  //公共资源路径
    },
    module:{
        rules:[{
            test:/\.css$/,
            exclude:/node_modules/,
            use:[
                {
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                }
            ]
        }]
    },
    resolve:{

    },
    babel:{
        presets:['es2015','stage-0','react'],
        plugins:['transfrom-runtime','add-module-exports']
    },
    devServer:{

    },
}