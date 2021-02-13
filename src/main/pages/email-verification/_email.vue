<template>
    <div class="umt-page umt-page-email-verification">
        <a-row type="flex" justify="center" align="middle" class="mailbox">
            <a-col :span="13">
                <umt-icon icon="mailbox" />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <p class="info">
                    <b>Ingresa tu código de verificación enviado a <a><b>{{ $route.params.email }}</b></a></b>
                </p>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-code-input />
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="18">
                <umt-button class="send-code" @click="sendCode">
                    enviar
                </umt-button>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col>
                <a><b>Reenviar código</b></a>
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
                stepTitle: 'verifica tu email',
                stepBackView: 'start'
            }
        },
        methods: {
            sendCode () {

            }
        }
    }
</script>
