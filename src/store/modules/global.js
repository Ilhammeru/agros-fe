import router from '../../router/index'
const state = {
    errorReq: [],
    isLoading: false,
    isLogin: false,
    profile: "",
    mitra: []
}
const getters = {
    errorReq(state) {
        return state.errorReq
    },
    isLoading(state) {
        return state.isLoading
    },
    isLogin(state) {
        return state.isLogin
    },
    profile(state) {
        return state.profile
    },
    mitra(state) {
        return state.mitra
    }
}
const mutations = {
    SET_LOADING: (state, payload) => {
        state.isLoading = payload
    },
    SET_PROFILE: (state, payload) => {
        state.profile = payload
    },
    SET_MITRA: (state, payload) => {
        state.mitra = payload
    }
}
const actions = {
    setLoading(context, payload) {
        context.SET_LOADING = payload;
    },
    async getMitra(context) {
        await this._vm.axios.get('/mitra')
        .then((res) => {
            context.commit('SET_MITRA', res.data.data)
        })
    },
    async getProfile(context) {
        await this._vm.axios.get('/profile')
        .then((res) => {
            context.commit('SET_PROFILE', res.data.data)
        })
        .catch(err => {
        })
    },
    async delete(context, payload) {
        context.state.isLoading = true;
        await this._vm.axios.post('/delete', payload)
        .then((res) => {
            context.state.isLoading = false;
            context.commit("SET_MITRA", res.data.data);
            if (res.data.status) {
                this._vm.$swal('Sukses', res.data.message, 'success');
            } else {
                this._vm.$swal('Gagal', res.data.message, 'error');
            }

            if (res.data.isSelf) {
                // clear data
                context.dispatch('auth/clearStorage', null, {root: true})
                router.push('/login')
            }
        })
        .catch(err => {
            context.state.isLoading = false;
        })
    },
    async update(context, payload) {
        context.state.isLoading = true;
        context.state.errorReq = [];
        await this._vm.axios.patch('/update', payload)
        .then((res) => {
            context.state.isLoading = false;
            context.commit("SET_PROFILE", res.data.data)
            this._vm.$swal('Sukses', 'Update data berhasil', 'success')
        })
        .catch(err => {
            context.state.isLoading = false;
            let errors = err.response.data.errors;
            context.state.errorReq = errors;
        })
    },
    resetError(context) {
        context.state.errorReq = []
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}