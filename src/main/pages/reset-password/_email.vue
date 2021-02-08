<template>
    <div class="umt-page umt-page-reset-password">
        <a-row type="flex" justify="center" align="middle" class="lock">
            <a-col :span="12">
                <umt-icon icon="lock" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <p class="info">
                    <b>Ingresa tu código de verificación enviado a <a>{{ $route.params.email }}</a></b>
                </p>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-code-input />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center" class="pass-input">
            <a-col :span="18">
                <umt-input v-model="password" placeholder="Ingresa tu contraseña nueva" type="password" :mode="$umtThemePrefix" :default-hide-password="false" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-button class="change-pass" @click="changePassword">
                    cambiar contraseña
                </umt-button>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col>
                <a>Reenviar código</a>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import UmtLayoutStepMixin from './../../mixins/umt-layout-step'

    export default {
        mixins: [UmtLayoutStepMixin],
        layout: 'step',
        data () {
            return {
                stepTitle: 'cambia tu contraseña',
                stepBackView: 'login'
            }
        },
        methods: {
            changePassword () {

            }
        }
    }
</script>
