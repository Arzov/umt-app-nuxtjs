<template>
    <div>
        <slot />
    </div>
</template>

<script>
    import Vue from 'vue'

    const breakPoints = {
        sm: 500,
        md: 700,
        lg: 'infinite'
    }

    export default {
        data () {
            return {
                media: undefined,
                mediaIndex: 0,
                sortedBreakPoints: []
            }
        },
        beforeMount () {
            const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            let infiniteCount = 0
            let infiniteBp

            for (const bp in breakPoints) {
                if (!isNaN(breakPoints[bp])) { this.sortedBreakPoints.push([bp, breakPoints[bp]]) } else {
                    infiniteBp = bp
                    infiniteCount++
                }

                if (infiniteCount > 1) { throw new Error('No se puede tener más de un punto de quiebre con la propiedad infinite!') }
            }

            this.sortedBreakPoints.sort(function (a, b) {
                return b[1] - a[1]
            })

            this.media = infiniteBp
            this.sortedBreakPoints.forEach((bp) => {
                if (bp[1] > height) { this.media = bp[0] }
            })
            this.sortedBreakPoints.unshift([infiniteBp, 'infinite'])

            this.mediaIndex = this.sortedBreakPoints.findIndex((value) => {
                return value[0] === this.media
            })

            Vue.prototype.$mq = this.media
            Vue.prototype.mq = this.getPropByMq
            Vue.prototype.$mq_bp = this.sortedBreakPoints
            Vue.prototype.$mq_index = this.mediaIndex
        },
        methods: {
            getPropByMq (props) {
                if (props[this.media] !== undefined) {
                    return props[this.media]
                } else {
                    let result

                    // Busca la medida menor más próxima
                    for (let i = (this.mediaIndex + 1); i < this.sortedBreakPoints.length; i++) {
                        const previous = this.sortedBreakPoints[i][0]
                        if (props[previous] != undefined) {
                            result = props[previous]
                            break
                        }
                    }

                    // En caso de no existir una medida menor, busca una mayor
                    if (!result) {
                        for (let i = (this.mediaIndex - 1); i >= 0; i--) {
                            const previous = this.sortedBreakPoints[i][0]
                            if (props[previous] != undefined) {
                                result = props[previous]
                                break
                            }
                        }
                    }

                    return result
                }
            }
        }
    }
</script>
