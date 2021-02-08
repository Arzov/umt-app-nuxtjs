<template>
    <div class="umt-page umt-page-recover-password">
        <a-row type="flex" justify="center" align="middle" class="key">
            <a-col :span="18">
                <umt-icon icon="key" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-input v-model="email" placeholder="Ingresa tu correo electrónico" type="email" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center" class="info">
            <a-col :span="18">
                <p>
                    Te enviaremos un código a tu correo electrónico para recuperar tu contraseña.
                </p>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-button @click="recoverPassword">
                    recuperar contraseña
                </umt-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtLayoutStepMixin from './../mixins/umt-layout-step'

    export default {
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: 'recupera tu contraseña',
                stepBackView: 'login',
                email: ''
            }
        },
        methods: {
            recoverPassword () {
                if (this.email) {
                    this.$router.push({
                        name: 'reset-password-email',
                        params: {
                            email: this.email
                        }
                    })
                }
            }
        }
    }
</script>
