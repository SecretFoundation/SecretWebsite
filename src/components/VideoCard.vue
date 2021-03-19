<template>
    <div class="video" >
        <iframe :src="`${url}${isAutoplay}`" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        autoplay: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        isAutoplay: function () {
            return this.autoplay ? "autoplay=1" : ""
        }
    }
}
</script>

<style lang="scss" scoped>
    .video {
        iframe {
            max-width: 100%;
            @include respond-to("small and down") {
            width: 100%;
            height: 200px;
            }
            @include respond-to("medium") {
            width: 460px;
            height: 260px;
            }
            @include respond-to("large and up") {
            width: 560px;
            height: 315px;
            }
        }
    }
</style>