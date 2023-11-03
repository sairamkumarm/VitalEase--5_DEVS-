<script lang="ts">
    
let symptoms: Record<string, boolean> = {
	severePain: false,
	lightHeadedness: false,
	Breathlessness: true,
    chestPain: false,
    stomachAche: false,
    headStroke: false,
    dizziness: true,
    swelling: false
};

let instructions: string[] = ["Stay in touch with family, friends, or former coworkers to stay engaged and to keep your spirits up",
"Choose a contact person who will check on you during a disaster, and decide how you will communicate with each other (for instance, by telephone, knocking on doors). Consider speaking with your neighbors about developing a check-in system together.",
"Create a list of contact information for family members and friends. Leave a copy by your phone(s) and include one in your Emergency Supply Kit.",
"Plan how you will leave and where you will go during an evacuation. If you are living in a retirement or assisted living community, learn what procedures are in place in case of emergencies. Keep a copy of exit routes and meeting places in an easy-to-reach place.•Create a care plan and keep a copy in your Emergency Supply Kit. Try out CDC’s easy-to-use care plan templateCdc-pdf.",
"If you have medical, transportation, or other access needs during an emergency, consider signing up for SMART911, Code Red, or your local county registry, depending upon which service your area uses to helps first responders identify people who may need assistance right away."]

function toggle(symptom: string): void {
	symptoms[symptom] = !symptoms[symptom];
}


</script>


<div class="w-screen ctinr h-screen text-white">
	<div class="w-screen banner relative h-16 ">
		<div class="top-bg fixed top-0 right-0 left-0  h-16 z-10" />
	</div>
    <div class="contains text-black">
        <div class="sirenlogo w-1/2">
            <div class="outerCircle h-80 w-80">
                <div class="innerCircle h-72 w-72">
                    <img src="/assets/siren.svg" alt="siren img">
                </div>
            </div>
        </div>
        <div class="services w-1/2">
            <h1>Emergency Mode!!</h1><br>
                <h2>We have already <span style="color: #521656;"> Alerted </span>your care givers. </h2>
                    <div class="servicesBtns mt-20">
                        <div class="btnContainer">
                            <button class="btn rounded w-56">Emergency services</button>
                            <button class="btn rounded ml-10 w-56">Care givers</button>
                        </div>
                        <div class="btnContainer">
                            <button class="btn rounded w-56">Instant Consultation</button>
                            <button class="btn rounded ml-10 w-56">Emergency Contacts</button>
                        </div>
                    </div>
        </div>
    </div>
    <div class="symptoms">
        <div><h1 class="sym-text">Describe your symptoms</h1></div>
        <div class="chips">
            
            {#each Object.keys(symptoms) as s}
            <span
                class="chip {symptoms[s] ? 'variant-filled' : 'variant-soft-error'} rounded-full border-solid border-error-500 border-2"
                on:click={() => { toggle(s); }}
                on:keypress
            >
                {#if symptoms[s]}<span>✔</span>{/if}
                <span class="capitalize">{s}</span>
            </span>
            {/each}

        </div>
        
    </div>

    <div class="cardHolder w-screen"> 
        <div class="instructions card h-96 w-96 variant-soft-error">
            <h1 class="cardtxt">Please make sure to</h1>
            {#each instructions as inst}
                <div class="m-7 flex">
                    <img src="assets/bulb.svg" alt="bulb icon">
                    <p class="m-3 font-semibold">{inst}</p>
                </div>
            {/each}
        </div>

    </div>
</div>
<style>
    .top-bg {
        background-color: #521656;
    }
    .outerCircle {
        background-color: #521656;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
        margin-left: 30px;
    }
    .innerCircle {
        border-radius: 50%;
        background-color: #c33175;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
    }
    .cardtxt {
        color: #521656;
        font-weight: 700;
        font-size: 40px;
        margin: 30px;
    }
    .ctinr {
        background-color: #e5e1e7;
        height: max-content;
    }
    .contains {
        display: flex;
    }
    button {
        background-color: #c33175;
        color: white;
        font-weight: 500;
    }
    h1{
        font-size: 50px;
        font-weight: 700;
    }
    h2{
        font-size: 36px;
        margin-top: 5px;
        font-weight: 700;
        color: #3a4468;
    }
    span {
        color: white;
        margin: 10px;   
        max-width: 250px;
    }
    .sirenlogo {
        display: flex;
        align-items: start;
        justify-content: center;
        height: max-content;
    }
    .services {
        margin-top: 60px;
        height: max-content;
    }
    .btnContainer {
        margin-top: 30px;
    }
    .sym-text {
        color: #521656;
        font-weight: 500;
        font-size: 40px;
    }
    .symptoms {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        margin: 30px;     
    }
    .chips {
        width: 600px;
        margin-top: 30px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .cardHolder {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
    .instructions {
        justify-self: center;
        width: 1150px;
        height: max-content;
    }
</style>