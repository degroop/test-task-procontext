<template>
    <div id="app">
        <todo-board />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoBoard from '@/components/TodoBoard.vue';

@Component({
    components: {
        TodoBoard
    },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
    font-family: 'Courier New';
    color: #2c3e50;
}
input, select {
    font-family: 'Courier New';
}
.close-icon {
    position: absolute;
    right: 0px;
    top: 4px;
    width: 10px;
    height: 10px;
    opacity: 0.3;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    &:before, &:after {
        position: absolute;
        left: 1px;
        content: ' ';
        height: 10px;
        width: 2px;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
}
.default-button {
    height: 36px;
    line-height: 36px;
    background-color: #f3f4fa;
    border-radius: 4px;
    position: relative;  
    text-align: center;  
    color: #000;
    opacity: 0.5;
    font-size: 12px;  
    &:hover {
        opacity: 1;
        cursor: pointer;
    }  
}
</style>
