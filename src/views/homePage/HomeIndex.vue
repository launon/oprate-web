<template>
    <div class="home__view">
        <div class="top_nav">

        </div>
        <div class="body_content">
            <Article :info="info"></Article>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Article from '@/components/Article.vue';

const info = ref({});

info.value = {
    profilePhoto:'https://i-avatar.csdnimg.cn/c782ab42aa1a4c2a8ac2790d5ec2a9df.jpg!1',
    name:'luo',
    title:'luo',
    contentText:'luo',
    read:100,
    like:5,
    collect:0,
};
</script>