<template>
    <div class="umt-component umt-bkg umt-step-bkg">
        <a-row type="flex" justify="end">
            <a-col :span="11">
                <img src="./../../assets/images/bkg-1-tr.svg">
            </a-col>
        </a-row>

        <a-row class="bkg-bl" type="flex" justify="start" align="bottom">
            <a-col :span="10">
                <img src="./../../assets/images/bkg-1-bl.svg">
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: 'UmtStepBkg'
    }
</script>
