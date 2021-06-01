const webpackMerge = require("webpack-merge")
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase:'/dist',//监听文件夹
    inline:true//是否实时监听
  }
})
