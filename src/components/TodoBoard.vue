<template>
    <div class="todo-list">
        <todo-list v-for="(list, index) in lists" :key="list.id" @remove:list="lists.splice(index, 1)" />
        <div class="default-button new-list-button" @click="addList">добавить доску</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';

@Component({
    components: {
        TodoList
    }  
})
export default class HelloWorld extends Vue {
    private lists: Array<Object> = []
    private listCounter: number = 0
    
    public addList(): void {
        this.lists.push({ id: this.listCounter });
        this.listCounter++;
    }  
}
</script>

<style scoped lang="less">
.todo-list {
    display: flex;
    align-items: flex-start;
    & > div:not(:first-child) {
        margin-left: 4px;
    }
}
.new-list-button {
    border: 1px solid #000;
    width: 160px;     
}
</style>
