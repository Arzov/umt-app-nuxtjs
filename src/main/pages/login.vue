<template>
    <div class="umt-page umt-page-login">
        <a-row type="flex" justify="center" align="middle" class="cup">
            <a-col :span="13">
                <umt-icon icon="cup" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-input placeholder="Ingresa tu correo electrónico" type="email" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-input v-model="password" placeholder="Ingresa tu contraseña" type="password" :mode="$umtThemePrefix" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-button>
                    iniciar sesión
                </umt-button>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center" class="forgot-password">
            <a-col :span="18">
                <p>
                    <b>¿Olvidaste tu contraseña? <a @click="toRecoverPassword">Recupérala.</a></b>
                </p>
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
                stepTitle: 'ingresa con tu cuenta',
                stepBackView: 'start',
                password: ''
            }
        },
        methods: {
            toRecoverPassword () {

            }
        }
    }
</script>
