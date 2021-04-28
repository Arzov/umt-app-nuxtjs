<template>
    <div class="umt-component umt-bkg umt-profile-bkg">
        <a-row type="flex" justify="end" align="middle">
            <a-col :span="1">
                <img src="./../../assets/images/bkg-3-cr.svg">
            </a-col>
        </a-row>

        <a-row type="flex" justify="start" align="bottom">
            <a-col :span="11">
                <img src="./../../assets/images/bkg-3-bl.svg">
            </a-col>
            <a-col :span="7" :offset="6">
                <img src="./../../assets/images/bkg-3-br.svg">
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: 'UmtProfileBkg'
    }
</script>
