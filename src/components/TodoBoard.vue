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
    }, 
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
@media (max-width: 575.98px) {
    .todo-list {
        flex-direction: column;
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .todo-list {
        flex-direction: row;    
        justify-content: space-between;
    }
}

@media (min-width: 768px) {
    .todo-list {
        flex-direction: row;      
    }
}

.todo-list {
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.new-list-button {
    border: 1px solid #000;
    width: 160px;     
}
</style>
