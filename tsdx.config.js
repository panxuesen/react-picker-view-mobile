const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      // 配置样式规则
      postcss({
        plugins: [
          // 自动补全css浏览器前缀
          autoprefixer(),
          // css 压缩
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        // modules: true, // 添加模块化类名前缀和后缀
        camelCase: false, // 支持驼峰
        sass: false, // 是否使用sass
        less: true,
        // autoModules: true,
        // namedExports: true, // 类名导出
        // namedExports(name) {
        //   // Maybe you simply want to convert dash to underscore
        //   // console.log(name)
        //   return name
        // }
      })
    );
    // remove preventAssignment warning
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? require('@rollup/plugin-replace')({
            'process.env.NODE_ENV': JSON.stringify(options.env),
            preventAssignment: true,
          })
        : p
    );
    return config;
  },
};