<template>
    <umt-theme-provider :theme="$umtTheme">
        <umt-media-query>
            <slot />
        </umt-media-query>
    </umt-theme-provider>
</template>

<script>
    export default {
        mounted () {
            const backgroundElement = document.querySelector('.umt-layout > .background')

            if (backgroundElement != null)
                backgroundElement.style.height = backgroundElement.clientHeight + 'px'
        }
    }
</script>
