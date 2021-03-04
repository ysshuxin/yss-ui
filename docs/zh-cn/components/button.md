# 按钮组件

<div id="example">
<bh-button type="default"></bh-button>
<bh-button type="primary"></bh-button>
<bh-alert></bh-alert>
<bh-button></bh-button>
<bh-button></bh-button>
</div>

### 代码示例：

```javascript
new Vue({
  el: "#example",
  components: {
    "bh-button": window.bhButton
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
      alert("这是一个测试组件");
    }
  }
});
```

<script>
new Vue({
    el: '#example',
    components:{
        'bh-button':window.bhButton,
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
