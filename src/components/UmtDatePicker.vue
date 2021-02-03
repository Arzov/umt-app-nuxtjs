<template>
    <div class="umt-component umt-date-picker">
        <h4 v-if="label">
            {{ label }}
        </h4>

        <a-row type="flex" :gutter="12">
            <a-col :span="8">
                <umt-input :value="privateValue['day']" placeholder="Día" @focus="onPress" />
            </a-col>
            <a-col :span="8">
                <umt-input :value="privateValue['month']" placeholder="Mes" @focus="onPress" />
            </a-col>
            <a-col :span="8">
                <umt-input :value="privateValue['year']" placeholder="Año" @focus="onPress" />
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import moment from 'moment'
    import { DatePicker, DatePickerPluginInterface } from '@capacitor-community/date-picker'

    const datePicker = new DatePicker() as DatePickerPluginInterface

    export default Vue.extend({
        props: {
            label: {
                required: false,
                type: String,
                default: undefined
            },

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
                                year: moment(date.value, 'DD-MM-YYYY').format('YYYY')
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
