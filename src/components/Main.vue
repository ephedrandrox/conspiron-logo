<template>
    <div id="MainRootElement">
        <div class="MainRootBackground">
            <transition appear name="mainBackgroundIntro">
                <div class="MainRootBackgroundGradientBall"></div>
            </transition>
        </div>
        <div id="MainContent">
            <MainLogo/>
        </div>
    </div>
</template>
<script>
    import MainLogo from './mainLogo/mainLogo.vue';

    export default {
        name: "Main",
        components: {MainLogo},
    };
</script>
<style>
    body {
        overflow: hidden;
        background: none;
        color: #8d8d8d;
    }

    #MainRootElement {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background: rgba(0, 0, 0, 0);
    }

    #MainContent {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: none;
    }

    .MainRootBackground {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(6, 6, 31, 0.83) 49%, rgb(0, 2, 4) 100%);
        background: rgb(0, 0, 0);
    }

    .MainRootBackgroundGradientBall {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 800px;
        height: 800px;

        transform: translateX(-50%) translateY(-50%);
        transform-origin: 50% 50%;
        opacity: .7;

        background: -moz-radial-gradient(center, ellipse cover, rgba(30, 87, 153, 1) 1%, rgba(59, 117, 177, 1) 31%, rgba(70, 129, 187, 0.7) 43%, rgba(94, 154, 207, 0) 68%, rgba(125, 185, 232, 0) 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, rgba(30, 87, 153, 1) 1%, rgba(59, 117, 177, 1) 31%, rgba(70, 129, 187, 0.7) 43%, rgba(94, 154, 207, 0) 68%, rgba(125, 185, 232, 0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, rgba(30, 87, 153, 1) 1%, rgba(59, 117, 177, 1) 31%, rgba(70, 129, 187, 0.7) 43%, rgba(94, 154, 207, 0) 68%, rgba(125, 185, 232, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

    .mainBackgroundIntro-enter-active, .mainBackgroundIntro-leave-active {
        transition: opacity 10s;
    }

    .mainBackgroundIntro-enter, .mainBackgroundIntro-leave-to {
        opacity: 0;
    }
</style>