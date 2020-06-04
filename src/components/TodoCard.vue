<template>
  <div class="card">
    <template v-if="editMode">  
        <input v-on:keyup.enter="editMode = false" type="text" class="card__title-input" v-model.lazy="card.name" placeholder="введите задание">
        <span class="add-symbol" @click="editMode = false">&#10003;</span>
    </template>
    <template v-else>
        <input type="checkbox" class="card__status" v-model="card.status">
        <span class="card__title">{{ card.name }}</span>        
    </template>
    <span class="close-icon" @click="$store.commit('addModal', { target: 'карточку', action: () => $emit('remove:card') })" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface TodoTaskInterface {
    status: boolean,
    name: string
}

@Component
export default class TodoCard extends Vue {
    @Prop() readonly card: TodoTaskInterface
    get editMode(): boolean {
        return this.card.name === '';
    }
}
</script>

<style scoped lang="less">
.card {
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;   
    &:not(:first-child) {
        margin-top: 5px;
    }     
    &__status {
        margin-left: 10px;
    }
    &__title {
        margin-left: 4px;
    }
    &__title-input {
        margin-left: 4px;
    }
}
.add-symbol {
    margin-left: 6px;
    font-weight: bold;
    color: #333;
    opacity: 0.3;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>
