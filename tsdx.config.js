const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        // modules: true, // 添加模块化类名前缀和后缀
        camelCase: true, // 支持驼峰
        sass: true, // 是否使用sass
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
    return config;
  },
};