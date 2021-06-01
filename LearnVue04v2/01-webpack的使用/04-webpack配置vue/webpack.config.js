const path = require('path')

module.exports = {
  entry:"./src/main.js",
  //webpack命令所调路径
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath:'dist/'//打包url时，地址前都会添加个dist/
  },
  //loader下载后需要的配置
  module: {
    rules: [
      {
        //匹配所有的css文件
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // webpack读取多个loader时，是从右向左的
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 加载的图片小于下方定义的limit时，会将图片编译成base64字符串格式
              // 大于时，会使用file--loader进行加载,会先进行打包后
              limit: 10000,
              name:'img/[name].[hash:8].[ext]'//原来打包是随机的hash值，可自定义
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        // 排除的文件夹
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
			{
			  test: /\.vue$/,
			  use: {
			    loader: 'vue-loader'
			  }
			}
    ],
  },
  //配置下列代码后，import时就不需要写相关的文件后缀
  resolve:{
		extensions:['.js','.css','.vue'],
    // 别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}
