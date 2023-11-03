import { writable, type Writable } from 'svelte/store';

const CheckStore: Writable<boolean> = writable(false);
export default CheckStore;