<template>
    <div v-if="visible">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            bp: {
                required: true,
                type: String
            }
        },
        computed: {
            currentMq () {
                return this.$mq
            },

            visible () {
                if (Array.isArray(this.bp)) { return this.bp.includes(this.currentMq) } else {
                    const lastChar = this.bp.slice(-1)

                    if (lastChar === '+' || lastChar === '-') {
                        const mediaQuery = this.bp.slice(0, -1)
                        const sortedBp = this.$mq_bp
                        const mqIndex = this.$mq_index

                        const bpIndex = sortedBp.findIndex((value) => {
                            return value[0] === mediaQuery
                        })

                        if (lastChar === '+') { return mqIndex <= bpIndex } else if (lastChar === '-') { return mqIndex >= bpIndex }
                    } else {
                        return this.bp === this.currentMq
                    }
                }

                return false
            }
        }
    }
</script>
