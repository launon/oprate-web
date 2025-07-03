<template>
    <div class="home__view">
        <top-image></top-image>
        <search type="number" placeholder="请输入内容" @onChange="onChange"></search>
    </div>
</template>
<script setup>
import search from '@/components/Search.vue';
import TopImage from '@/components/TopImage.vue';
</script>