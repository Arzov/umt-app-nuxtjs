<template>
    <div class="umt-page umt-page-start">
        <a-row type="flex" align="middle">
            <a-col :span="2" :offset="3">
                <umt-theme-toggle-icon />
            </a-col>
            <a-col :span="17" :offset="2">
                <umt-start-dots-bkg />
            </a-col>
        </a-row>

        <umt-mq-layout bp="md-">
            <a-row type="flex" align="middle" class="logo">
                <a-col :span="18" :offset="3">
                    <umt-logo-icon />
                </a-col>
            </a-row>
        </umt-mq-layout>

        <umt-mq-layout bp="lg">
            <a-row type="flex" align="middle" class="logo">
                <a-col :span="15" :offset="3">
                    <umt-logo-icon />
                </a-col>
            </a-row>

            <a-row type="flex" align="middle" class="shoes">
                <a-col :span="21" :offset="0">
                    <umt-icon icon="start-shoes" />
                </a-col>
            </a-row>
        </umt-mq-layout>

        <a-row type="flex" align="bottom" class="buttons">
            <a-col :span="18" :offset="3" class="buttons-container">
                <umt-button>iniciar sesión</umt-button>

                <p>-O ingresa con tus redes sociales-</p>

                <a-row type="flex" justify="center">
                    <a-col>
                        <umt-facebook-icon />
                    </a-col>
                    <a-col :offset="3">
                        <umt-google-icon />
                    </a-col>
                </a-row>

                <p><b>¿No tienes cuenta? <a @click="toRegister">Regístrate</a></b></p>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        methods: {
            toRegister () {
                this.$router.push({ path: 'register' })
            }
        }
    }
</script>
