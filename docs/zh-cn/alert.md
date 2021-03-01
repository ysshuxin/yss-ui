# 分享组件

<div id="example">
<bh-alert>{{count}}</bh-alert>
</div>


### 代码示例：

```javascript
new Vue({
    el: '#example',
    components:{
        'bh-alert':window.bhAlert,
          },
    mounted(){
    },
    data(){
    return {
        txt:123,
        count:0
    }
    },
    methods:
        {
            click(){
                alert('这是一个测试弹出组件')
            }
            }
  });
```

<script>
new Vue({
    el: '#example',
    components:{
        'bh-alert':window.bhAlert,
          },
    mounted(){
    },
    data(){
    return {
        txt:123,
        count:0
    }
    },
    methods:{
                click(){
                    alert('这是一个测试弹出组件')
                }
            }
  });

</script>
