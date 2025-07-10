<template>
    <div class="layout-menu">
        <div class="layout-menu__wrapper">
            <ul class="layout-menu__root">
                <li v-for="(menu, index) in menus" :key="index">
                    <a :class="menu.active ? 'active_text' : ''" href="javascript:;" @click.prevent.stop="onClickMenu(menu.name)">{{ menu.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import router from '../../router';
import { ref, onBeforeMount, getCurrentInstance } from 'vue';
// import { useRouter } from 'vue-router';

let menus = ref();
// let thisRouter = useRouter();
const { ctx } = getCurrentInstance();
const filterMenu = () => {
    let menu = [
        {
            name: '首页',
            path: '/homepage/index',
            active: true
        },
        {
            name: '分类',
            path: '/article/index',
            active: false
        },
        {
            name: '文章推荐',
            path: '/personal/index',
            active: false
        },
        {
            name: '我的主页',
            path: '/user/index',
            active: false
        },
    ];
    menus.value = menu;
    selectedPath();
    // 通知父组件已生成的菜单列表
    ctx.$emit('menus', menus);
};
/**
* 根据当前页面地址重新选中菜单
*/
const selectedPath = () => {
    //获取当前页面地址
    let path = router.currentRoute.value.path;
    //重置菜单选中状态
    for (let menu of menus.value) {
        //根据当前地址匹配父级菜单
        if (path.indexOf(menu.path) === 0) {
            menu['active'] = true;
        } else {
            menu['active'] = false;
        }
    }
};

const onClickMenu = (name) => {
    for (let menu of menus.value) {
        if (menu.name == name) {
            menu.active = true;
            router.push(menu.path);
        }
        else{
            menu.active = false;
        }
    }
};

onBeforeMount(() => {
    filterMenu();
});
</script>
