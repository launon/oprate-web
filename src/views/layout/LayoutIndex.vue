<template>
    <div class="layout-menu">
        <div class="layout-menu__wrapper">
            <ul class="layout-menu__root">
                <li v-for="(menu, i) in menus" :key="i">
                    <a href="javascript:;" @click.prevent.stop="onClickMenu(menu.name)">{{ menu.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import router from '../../router';
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';

let menus = ref();
let thisRouter = useRouter();
const { ctx } = getCurrentInstance();
function filterMenu() {
    let menu = [
        {
            name: '首页',
            path: '/homepage/index'
        },
        {
            name: '分类',
            path: '/commodity/index'
        },
        {
            name: '个人推荐',
            path: '/personal/index'
        },
        {
            name: '我的主页',
            path: '/user/index'
        },
    ];
    menus.value = menu;
    selectedPath();
    // 通知父组件已生成的菜单列表
    ctx.$emit('menus', menus);
}
/**
* 根据当前页面地址重新选中菜单
*/
function selectedPath() {
    //获取当前页面地址
    let path = thisRouter.currentRoute.value.path;
    //重置菜单选中状态
    for (let menu of menus.value) {
        //根据当前地址匹配父级菜单
        if (path.indexOf(`/${menu.path}/`) === 0) {
            menu['active'] = true;
        } else {
            menu['active'] = false;
        }
    }
}

function onClickMenu(name) {
    for (let menu of menus.value) {
        if (menu.name == name) {
            thisRouter.push(menu.path);
        }
    }
}

onMounted(() => {
    filterMenu();

    //添加路由钩子函数，默认/进入首页
    router.beforeEach((to, from, next) => {
        if (to.fullPath === '/') {
            router.push('/index');
        } else {
            selectedPath();

            next();
        }
    });
})
</script>
