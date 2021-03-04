### 项目介绍
- ##### 基本依赖
- vue版本:[vue2.0](https://cn.vuejs.org/)
- 打包:[webpack5](https://webpack.docschina.org/)
- 测试框架:[karma](http://karma-runner.github.io/latest/index.html)+[mocha](https://mochajs.cn/)+[chai](https://www.chaijs.com/)
- 文档开发:[docsify](https://docsify.js.org/#/zh-cn/)
- [Markdown](https://www.runoob.com/markdown/md-tutorial.html)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)
- ##### 文档结构
```javascript
build
    |-main.js              // 打包脚本
config                     // webpack配置项
    |-webpack.base.js      // 基本配置
    |-webpack.lib.js       // lib编译配置
    |-webpack.main.js      // main基本配置
    |-webpack.dev.js       // dev开发环境配置
docs 
    |-zh-cn                // 中文文档
    |-index.html           // docsify主页，包含配置项
    |-_navbar.md           // 顶部导航栏
    |-_sidebar.md          // 左侧侧边栏
    |-_coverpage.md        // 封面
    |-index.js             // 组件库打包后文件，可在docsify中的.md文件中引入组件
lib                        // 打包目录
    |-button     
        |-index.js         // 打包后组件
    |-index.js             // 所有组件打包
public
    |-index.html           // 本地开发所需模版页
src
    |-components
        |-button
            |-index.vue    // 各个组件
            |-index.styl   // 组件样式
    |-style
        |-index.styl       // 全局样式
router
    |-index.js             // 路由表
    |-App.vue              // 本地开发所需组件
    |-index.js             // 打包入口
    |-main.js              // 本地开发入口
test
    |-specs
        |-button.spec.js   // 测试文件，需命名为*.spec.js格式
    |-utils.js             // 测试所需工具
utils
    |-dev                  // 开发组件所需工具           
karma.conf.js              // karma测试框架配置文件
```

### 开发规范
- ##### 文档结构
-- 新建组件需在src/components下建立文件夹，文件夹命名为组件名，此文件夹名为打包后lib中文件夹名
-- docs/index.js文件不需手动引入，此文件在本地开发时热更新后会同步更新
- ##### 样式
-- 当前使用的css预处理器为stylus 
-- 当前未支持主题系统，样式文件直接引入至vue文件内
-- class需要命名空间，有函数生成
-- vue组件内style标签不可加scoped选项
-- ```javascript
    //createNamespace接受一个字符串作为当前组件的class命名空间，此组件class类名均缀有此命名空间作为前缀
    import {createNamespace} from '../../../utils/dev/index'
    const {classNamespace}=createNamespace('button')
    const obj={
        disabled:'disabled'
        }
    classNamespace() // 'bhfae-button'
    classNamespace('text') // 'bhfae-button__text'
    classNamespace(obj) // 'bhfae-button button--disabled'
    classNamespace('text', obj) // 'bhfae-button__text button__text--disabled'
    classNamespace(['disabled', 'primary']) // 'bhfae-button button--disabled bhfae-button--primary'
    ```
- ##### 编写文档
-- 在docs/zh-cn/components/文件夹下新建.md文件，每个组件的说明文档对应md文件，md文件内可写vue代码，
在.md文件内的<script></script>标签内编写代码，docsify会解析此代码，
详情可阅读[docsify](https://docsify.js.org/#/zh-cn/)文档
-- index.js文件加载后会在window全局对象上挂载vue组件，可在md文件中注册此组件使用
-- ```javascript
        <div id="example">
        </div>
        <script>
            new Vue({
              el: "#example", // 挂载至id为example的元素上
              components: {
                "bh-button": window.bhButton // index.js文件引入后会挂载的组件，注册后在此md文件中使用
              },
              mounted() {},
              data() {
                return {
                  txt: 123,
                  count: 0
                };
              },
              methods: {
                click() {
                  console.log('test)
                }
              }
            });
        </script>
    ```
-- 文档编写完成后在docs/_sidebar.md文件中增加导航条目，可参考[Markdown](https://www.runoob.com/markdown/md-tutorial.html)语法教程
- ##### 编写单元测试
-- 所有测试用例都放在/test/specs下，并且命名为*.spec.js，测试框架会批量执行此文件夹下的测试用例
-- 可在谷歌中打开查看测试结果，也可在/karma.conf.js中配置测试环境
-- 测试用例参考[Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)文档，其他诸如断言库，测试依赖可查看顶部对应文档

