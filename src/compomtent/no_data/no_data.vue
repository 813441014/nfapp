<template>
    <div class="nodata">
        <p>暂无数据</p>
    </div>
</template>

<script>
    export default {
        name: "no_data"
    }
</script>

<style scoped>
    .nodata{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
    .nodata p{
        font-size: 0.4rem;
        line-height: 1rem;
    }
</style>