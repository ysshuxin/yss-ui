# 分享组件
bh:::这是组件
<bh-share></bh-share>
<bh-button onClick={click} txt="ssddd"></bh-button>
```javascript
    import {Toast} from 'vant'
    export default {
        name: "index",
        props:{
            txt:{
                type:String,
                default:'分享'
            },

        },
        methods:{
            share(){
                Toast('分享成功')
            }
        }
    }
```
<div>ceshi</div>
####用法
:::bh
## 用法


script:::
 import {Toast} from 'vant'
    export default {
        name: "index",
        props:{
            txt:{
                type:String,
                default:'分享'
            },

        },
        methods:{
            share(){
                Toast('分享成功')
            }
        }
    }
script:::
