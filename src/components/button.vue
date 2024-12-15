<template>
    <div>
        <h1>HelloWorld!!!</h1>
        <el-button plain @click="open1"> Closes automatically </el-button>
        <el-button plain @click="open2"> Won't close automatically </el-button>
    </div>
</template>

<script setup>

const open1 = () => {
    ElNotification({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
    })
}

const open2 = () => {
    ElNotification({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0,
    })
}

</script>

<style lang="less" scoped></style>