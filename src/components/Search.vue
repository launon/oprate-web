<template>
    <div class="search">
        <textarea
            class="textarea" name="contactus" id="contactus" v-if="textarea" :cols="cols" :rows="rows"
            :placeholder="placeholder"
        ></textarea>
        <input v-else :type="type" v-model="value" :placeholder="placeholder" @change="onChange">
    </div>
</template>
<script setup>
import { defineEmits, defineProps, ref } from 'vue';

let value = ref('');
const props = defineProps({
    type: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    textarea: Boolean,
    cols: {
        type: String,
        default: ''
    },
    rows: {
        type: String,
        default: ''
    },
});
const emit = defineEmits(['click']);

const onChange = () => {
    console.log(value.value);
    emit('click');
};
</script>
<style lang="less" scoped>
input::-webkit-input-placeholder {
    padding: 3px;
}

input {
    height: 26px;
}

textarea::-webkit-input-placeholder {
    padding: 3px;

}
</style>