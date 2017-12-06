var webpack = require('webpack');
module.exports = {
    //页面入口文件配置 （html文件引入唯一的js 文件）
    entry:{
        main:'./src/js/entry.js'
    },
    //对应输出项配置
    output:{
        path:__dirname+'/out', //入口文件最终要输出到哪里
        filename:'index.js', //输出文件的名称
        publicPath:__dirname+'/out'  //公共资源路径
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:['babel-loader']
            },
            //解析css, 并把css添加到html的style标签里
            {
                test:/.css$/,
                use:['style-loader','css-loader']
            },
            //解析css, 并把css变成文件通过link标签引入
            /*{
                test:/.css$/,
                use:ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})
            }*/
            //解析图片
            {
                test:/.(jpg|jpeg|png|gif|svg)$/,
                use:['url-loader?limit=8192&name=./[name].[ext]']
            },
            //
            {
                test:/.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
     /*resolve:{

    },
    babel:{
        presets:['es2015','stage-0','react'],
        plugins:['transfrom-runtime','add-module-exports']
    },
    devServer:{

    },*/
}