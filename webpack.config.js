var webpack = require('webpack');


//引入插件
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});//代码压缩
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');//把公共模块提取出来, 并取名为'common'(名字自起), webpack之后再out文件夹下生成common.js, 测试时记得引入提取出来的公共模块js文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css独立引入变成link标签形式, 使用该插件需要独立下载'npm install extract-text-webpack-plugin --save-dev', 同时下面的rules也必须更改
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});//引入jquery



module.exports = {
    //页面入口文件配置 （html文件引入唯一的js 文件）
    entry:{
        index1:'./src/js/entry.js',
        index2:'./src/js/entry2.js',

    },
    //对应输出项配置
    output:{
        path:__dirname+'/out', //入口文件最终要输出到哪里
        filename:'[name].js', //这样就可以生成两个js文件, 名字分别为index1.js, 和index2.js
        publicPath:'http://localhost:8080'+'/out'  //公共资源路径
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
    //插件集合
    plugins:[uglifyPlugin,CommonsChunkPlugin,ExtractTextPlugin,providePlugin]
}