import { initHeader } from '../../plugins/init';
import router from '../../router/index'
import CryptoJS from 'crypto-js';

const state = {
    token: "",
    user: "",
    scope: ""
}
const getters = {
    token(state) {
        return state.token;
    },
    user(state) {
        return state.user;
    },
    scope(state) {
        return state.scope;
    }
}
const mutations = {
    SET_LOGIN: (state, payload) => {
        state.token = payload.data.data.token;
        state.user = payload.data.data.user;
        state.scope = payload.data.data.scope;
    }
}
const actions = {
    async register(context, payload) {
        context.rootState.global.isLoading = true;
        context.rootState.global.errorReq = [];
        await this._vm.axios.post("/register", payload)
        .then((res) => {
            context.rootState.global.isLoading = false;
            this._vm.$swal('Sukses', 'Register berhasil', 'success')
        })
        .catch((err) => {
            context.rootState.global.isLoading = false;
            let errors = err.response.data.errors;
            context.rootState.global.errorReq = errors;
        })
    },
    async login(context, payload) {
        context.rootState.global.isLoading = true;
        context.rootState.global.errorReq = [];
        await this._vm.axios.post('/login', payload)
        .then((res) => {
            initHeader(res.data.data.token)
            // encrypt
            let encUser   = CryptoJS.AES.encrypt(JSON.stringify(res.data.data.user), process.env.VUE_APP_CRYPTO_KEY).toString();
            let encToken  = CryptoJS.AES.encrypt(res.data.data.token, process.env.VUE_APP_CRYPTO_KEY).toString();

            localStorage.setItem('jwt', encToken);
            localStorage.setItem('user', encUser);
            localStorage.setItem('scope', res.data.data.scope);
            localStorage.setItem('isLogin', true);
            context.commit("SET_LOGIN", res);
            context.rootState.global.isLoading = false;
            context.rootState.global.isLogin = true;
            router.push('/');
        })
        .catch((err) => {
            context.rootState.global.isLoading = false;
            let errors = err.response.data.errors;
            context.rootState.global.errorReq = errors;
        })
    },
    async logout(context) {
        context.rootState.global.isLoading = true;
        await this._vm.axios.get('/logout')
        .then((res) => {
            // clear local storage and state
            context.dispatch("auth/clearStorage", null, {root: true})
            router.push('/login')
        })
        .catch(err => {
            context.rootState.global.isLoading = false;
        })
    },
    clearStorage(context) {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        localStorage.removeItem('scope');
        localStorage.removeItem('isLogin');
        context.rootState.global.isLogin = false;
        context.rootState.global.isLoading = false;
        context.state.token = "";
        context.state.user = "";
        context.state.scope = "";
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}