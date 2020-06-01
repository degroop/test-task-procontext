<template>
  <div class="list">
    <template v-if="editMode">  
        <input v-on:keyup.enter="editMode = false" type="text" class="list__title-input" v-model="name" placeholder="введите название">
    </template>
    <template v-else>
        <div class="header">
            {{ name }}
        </div>
        <div class="filter">  
            <div class="filter__title">
                <input type="checkbox" v-model="filterEnabled">
                <span>Включить фильтр</span>
            </div>  
            <div class="filter__body">
                <input :disabled="!filterEnabled" placeholder="по названию" type="text" class="filter__name" v-model.trim="nameFilter">
                <select :disabled="!filterEnabled" class="filter__status" v-model="statusFilter">
                    <option :value="null">по статусу</option>
                    <option :value="true">Выполнено</option>
                    <option :value="false">Не выполнено</option>
                </select>            
            </div>
        </div>
        <div class="body">
            <todo-card v-for='(card, index) in filteredTodos' :card='card' :key='index' @remove:card="todos.splice(index, 1)"></todo-card>
            <div v-if="!filterEnabled" @click="addTask" class="default-button">добавить карточку</div>
        </div>        
    </template>  
    <span class="close-icon" @click="$emit('remove:list')"/>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TodoTaskInterface } from '@/components/TodoCard.vue';
import TodoCard from '@/components/TodoCard.vue';


@Component({
    components: {
        TodoCard
    }
})
export default class TodoList extends Vue {
    private name: string = ''
    private todos: Array<TodoTaskInterface> = []
    private editMode: boolean = true;
    private statusFilter: boolean | null = null
    private nameFilter: string = ''
    private filterEnabled: boolean = false

    get filteredTodos(): Array<TodoTaskInterface> {
        return this.filterEnabled ? this.todos.filter( el => ( this.statusFilter === null || el.status === this.statusFilter ) && el.name.toLowerCase().includes(this.nameFilter.toLowerCase())) : this.todos;
    }

    public addTask(): void {
        this.todos.push({ status: false, name: '' });
    }    
}
</script>

<style scoped lang="less">
    .list {
        padding: 4px 4px;
        border-radius: 4px;
        width: 270px;   
        background-color: #ebecf0;
        position: relative;  
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
        padding-top: 5px;
    }
    .body > div:not(:first-child) {        
        margin-top: 5px; 
    }
    .filter {
        padding: 4px 0px;
        border-bottom: 1px solid #ccc;
        &__name {
            width: 162px;
        }
        &__status {
            margin-top: 4px;
            width: 170px;
        }
    }  
</style>
