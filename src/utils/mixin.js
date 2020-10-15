import { mapActions, mapGetters } from "vuex";

export const Mixin={
    computed: {
        ...mapGetters([
            'car',
            'userName'
        ]),
        
    },
    methods: {
        ...mapActions([
            'setCar',
            'setUserName'
        ])
    },
}