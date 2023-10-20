# Color 色彩
了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

## 主色
 默认的主题色是明亮、友好的蓝色。

 <DemoColorBox style="  width: 30%;" />

## 辅助色
除了主颜色外，您需要在不同的场景中使用不同的场景颜色 (例如，危险的颜色表示危险的操作)
<div class="box">
  <DemoColorBox style="  width: 24%;" name="success" color="#67c23a" />
  <DemoColorBox style="  width: 24%;" name="warning" color="#e6a23c" />
  <DemoColorBox style="  width: 24%;" name="danger" color="#f56c6c" />
  <DemoColorBox style="  width: 24%;" name="info" color="#909399" />
</div>

## 其他颜色变量&其他变量
中性色用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。
<div>
  <CssVarBox></CssVarBox>
</div>

 <script setup>
  import DemoColorBox from '../demo/Color/DemoColorBox.vue' 
  import CssVarBox from '../demo/Color/CssVarBox.vue' 
</script>
<style>
.box {
  display:flex;
  justify-content: space-between;
}

</style>
