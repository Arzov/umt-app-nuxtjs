<template>
    <umt-theme-provider :theme="$umtTheme">
        <umt-media-query>
            <slot />
        </umt-media-query>
    </umt-theme-provider>
</template>

<script>
    export default {

    }
</script>
