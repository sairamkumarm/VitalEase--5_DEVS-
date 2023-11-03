<script lang="ts">
import CheckStore from "$lib/stores/CheckStore";
import { Modal, getModalStore} from '@skeletonlabs/skeleton';
import type { SvelteComponent } from 'svelte';
const modalStore = getModalStore();
export let parent: SvelteComponent;
let currentId:string = $CheckStore.val;

const handleClick = () => {
    if ($modalStore[0].response) $modalStore[0].response({val:true});
    modalStore.close()
}
</script>
<form action={currentId}>
<div class="container rounded-lg flex p-4 variant-glass-tertiary w-screen mr-72 ml-72 z-50">
    <div class="register">
        <h1>New here?<br><br>Register</h1>
        <label class="label">
        	<span>Full Name</span>
        	<input class="input" type="text" placeholder="Full Name" />
        </label>
        <label class="label">
        	<span>Email</span>
        	<input class="input" type="email" placeholder="Email" />
        </label>
        <label class="label">
        	<span>Phone number</span>
        	<input class="input" type="tel" placeholder="Phone Number" />
        </label>
        <div class="otp h-12">
            <button class="btn request text-white rounded-lg h-12 bg-slate-900">Request OTP</button>
            <input class="input w-52" type="text" placeholder="OTP" />
        </div>
        <button type="submit" class="btn bg-blue-700 rounded-sm mt-7 h-14 w-40" on:click={handleClick}>Rgister</button>
    </div>
    <div class="divider"></div>
    <div class="login">
        <h1>Welcome Back <br><br> Log in</h1>
        <label class="label">
        	<span>Email</span>
        	<input class="input" type="email" placeholder="Email" />
        </label>
        <p>or</p>
        <label class="label">
        	<span>Phone number</span>
        	<input class="input" type="tel" placeholder="Phone Number" />
        </label>
        <div class="otp h-12">
            <button class="btn text-white request rounded-lg h-12 bg-slate-900">Request OTP</button>
            <input class="input w-52" type="text" placeholder="OTP" />
        </div>
        <button type="submit" class="btn variant-filled-primary rounded-sm mt-10 h-14 w-40" on:click={parent.onClose}>Login</button>
    </div>
</div>
</form>

<style>
    .otp {
        display: flex;
        justify-content: space-evenly;
    }
    .container {
        height: 650px;
    }
    .register {
        width: 50%;
        text-align: center;
        align-items: center;
    }
    .login {
        width: 50%;
        align-items: center;
        text-align: center;
    }
    p{
        font-size: 30px;
        margin: 40px;
    }
    h1 {
        margin-top: 40px;
        color: white;
        font-size: 30px;
        font-weight: 500;
    }
    .divider {
        width: 2px;
        height: 350px;
        display: flex;
        align-self: center;
        background-color: white;
    }
    label {
        margin: 26px;
    }
    span {
        float: left;
        color: white;
    }
</style>