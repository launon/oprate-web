<template>
    <div class="article-view">
        <a class="user-info">
            <img :src="info.profilePhoto" alt="">
            <span>{{ info.name }}</span>
        </a>
        <div class="article-content">
            <a class="article-content__title">{{ info.title }}</a>
            <a class="article-content__contentText">{{ info.contentText }}</a>
        </div>
        <div class="article-bottom">
            <div class="operation-b">
                <p class="operation-b-img">
                    <img src="https://i-operation.csdnimg.cn/images/8efd18d5d7054f77a81294a14cd80ad5.png" alt="">
                    <span>阅读 {{ info.read }}</span>
                </p>
            </div>
            <div class="operation-b">
                <p class="operation-b-img">
                    <img src="https://i-operation.csdnimg.cn/images/bfd9e0f6b22b460d8e318efd356453f9.png" alt="">
                    <span>{{ info.like }} 赞</span>
                </p>
            </div>
            <div class="operation-b">
                <p class="operation-b-img">
                    <img src="https://i-operation.csdnimg.cn/images/bf18d31bb1704f12afa48198fda79b98.png" alt="">
                    <span>收藏 {{ info.collect }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    info: {
        type: Object,
        default: () => ({})
    }
});
</script>