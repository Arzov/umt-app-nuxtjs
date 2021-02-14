<template>
    <div class="umt-component umt-back-arrow" @click="$emit('click')">
        <img :src="require(`./../../assets/images/${$umtThemePrefix}-arrow-left.svg`)">
    </div>
</template>

<script>
    export default {

    }
</script>
