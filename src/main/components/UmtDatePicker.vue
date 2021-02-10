<template>
    <div class="umt-component umt-date-picker">
        <umt-input :value="_date" :placeholder="placeholder" @focus="onPress" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import moment from 'moment'
    import { DatePicker, DatePickerPluginInterface } from '@capacitor-community/date-picker'

    const datePicker = new DatePicker() as DatePickerPluginInterface

    export default Vue.extend({
        props: {
            placeholder: {
                required: false,
                type: String,
                default: ''
            },

            max: {
                required: false,
                type: Date,
                default: undefined
            },

            min: {
                required: false,
                type: Date,
                default: undefined
            },

            value: {
                required: false,
                type: Object,
                default: () => { return {} }
            }
        },
        data () {
            return {
                privateValue: {} as any
            }
        },
        computed: {
            _date () {
                if (this.privateValue && this.privateValue['date'])
                    return this.privateValue['date'].format('DD-MM-YYYY')

                return ''
            }
        },
        watch: {
            value () {
                this.privateValue = this.value
            }
        },
        methods: {
            onPress ($event: any) {
                $event.stopPropagation()
                $event.target.blur()

                let currentDate = moment()

                if (this.privateValue.day != null && this.privateValue.month != null && this.privateValue.year != null)
                    currentDate = moment(`${this.privateValue.day}-${this.privateValue.month}-${this.privateValue.year}`, 'DD-MM-YYYY').add(1, 'days')

                datePicker
                    .present({
                        mode: 'date',
                        format: 'dd-MM-yyyy',
                        min: this.parseDate(this.min, 'DD-MM-YYYY'),
                        max: this.parseDate(this.max, 'DD-MM-YYYY'),
                        date: currentDate.format('DD-MM-YYYY')
                    })
                    .then((date) => {
                        if (date.value) {
                            this.privateValue = {
                                day: moment(date.value, 'DD-MM-YYYY').format('DD'),
                                month: moment(date.value, 'DD-MM-YYYY').format('MM'),
                                year: moment(date.value, 'DD-MM-YYYY').format('YYYY'),
                                date: moment(date.value, 'DD-MM-YYYY')
                            }

                            this.$emit('input', this.privateValue)
                        }
                    })
            },

            parseDate (value: any, format: string) {
                if (!value || value === '')
                    return undefined

                return moment((value as Date)).format(format)
            }
        }
    })
</script>

<style scoped>

</style>
