import Vue from 'vue'
import Vuex from 'vuex'
import { ModalWindowInterface } from '@/components/ConfirmDialog.vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modals: Array<ModalWindowInterface>()
    },
    mutations: {
        addModal(state, modal: ModalWindowInterface) {
            state.modals.push(modal);
        },
        removeModal(state) {
            state.modals.splice(0, 1);
        }
    },
    actions: {
    },
    modules: {
    }
})
