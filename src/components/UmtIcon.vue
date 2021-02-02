<template>
    <div class="umt-component umt-icon">
        <img :src="require(`./../assets/images/${icon}.svg`)">
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                required: true,
                type: String
            }
        }
    }
</script>
