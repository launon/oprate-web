<template>
    <div class="topImage" :style="randomBackground"></div>
</template>

<script setup>
import { ref, computed } from 'vue'
import publicTools from '@/store/publicTools'

let randomBackground = computed(() => {
    // 计算body的可用高度
    // 存放要更换的图片
    let img = publicTools.topImage({ type: 'bg', ctype: 'nature' });
    console.log(img)
    let imgs = [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pcauto.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fautohm%2F2202%2F18%2Fc36%2F298029185_1645174561361_830x600.jpg&refer=http%3A%2F%2Fimg.pcauto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665417006&t=2d445766214861d9589f1957cab913d8",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F7a%2F4e%2F84%2F7a4e84857a78870c19c639ef2b71078d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665417776&t=af1aeeaeaf4b173d1f5fefc4a205ce8a",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd9176c4b44688066bc9bf40a2e8306202711f1cb3f17c-0gVSWg_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665417776&t=c80a2ab57753cbb02382236ee4939f52",
    ];
    let imgName = imgs[Math.floor(Math.random() * 3)]; //进行计算随机
    let style =
        "background-image:url('" +
        imgName +
        "'); background-repeat: no-repeat; "
    return style;

})
</script>

<style lang="less" scoped>
.topImage {
    width: 100%;
    height: 500px;
    margin: auto;
    text-align: center;
    background-size: cover;
    aspect-ratio: 16 / 9;
}
</style>