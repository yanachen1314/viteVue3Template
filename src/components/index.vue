<template>
    <div>
        <button @click="log">{{ msg }}</button>
    </div>
</template>
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
    console.log(msg)
}
</script>
<style></style>