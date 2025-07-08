<template>
    <div class="topImage" :style="randomBackground"></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import publicTools from '@/store/publicTools'

const img = ref('')
const path = '/random_img.php'
const params = {
    type: 'bg',
    ctype: 'acg',
    return: 'json'
}

let randomBackground = computed(() => {
    let style =
        "background-image:url('" +
        img.value +
        "'); background-repeat: no-repeat; "
    return style;

})

onMounted(() => {
    publicTools.topImage(path, params).then(res => {
        if (res.error) {
            console.log(res.erros);
        }
        else {
            img.value = res.img;
        }
    });
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