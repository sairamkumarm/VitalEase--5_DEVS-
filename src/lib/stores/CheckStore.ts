import { writable, type Writable } from 'svelte/store';

const CheckStore: Writable<{val: string}> = writable({val: "/"});
export default CheckStore;