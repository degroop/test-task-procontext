<template>
    <div v-if="$store.state.modals.length > 0" class="confirm-dialog-wrapper">
        <div v-for="modal, index in $store.state.modals" :key="index" class="confirm-dialog">
            <div class="header">Удалить {{ modal.target }}?</div>
            <div class="body">
                <div @click="proceed" class="default-button action-button">удалить</div>
                <div @click="decline" class="default-button action-button">отмена</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface ModalWindowInterface {
    target: string,
    action: Function
}

@Component
export default class ConfirmDialog extends Vue {
    private proceed(): void {
        this.$store.state.modals[0].action();
        this.$store.commit('removeModal');
    }

    private decline(): void {
        this.$store.commit('removeModal');
    }
}
</script>

<style scoped lang="less">
.confirm-dialog-wrapper {
    position:fixed;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,.4);
    z-index:100;    
}
.confirm-dialog {
    width: 270px;
    padding: 4px 4px;
    border-radius: 4px;
    background-color: #ebecf0;
}
.header {
    height: 24px;
    line-height: 24px;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;   
    padding-right: 20px;  
    font-weight: bold;  
}
.body {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
}
.action-button {
    width: calc(50% - 2px);
    background-color: #c6c6c6;
}
</style>
