import { create } from 'zustand';


const useSignupStore = create(set => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

    setField: (field, value) => set(state => ({ ...state, [field]: value })),
    reset: () => set({ username: '', email: '', password: '', confirmPassword: '' }),
}));

export default useSignupStore;
