<template>
    <div class="banner fl">
        <div class="banner-title">
            十三亿人都会用的云笔记
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.banner {
    position: relative;
    width: 750px;
    height: 340px;
    background: url('/static/images/1.jpg') no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    border-radius: 6px;
    overflow: hidden;

    .banner-title {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 14px 20px;
        color: #fff;
        font-size: 20px;
        background: rgba(0, 0, 0, .5);
    }
}
</style>
