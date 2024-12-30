<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import FirstStep from '@/components/onboarding/FirstStep.vue';
import SecondStep from '@/components/onboarding/SecondStep.vue';
import ThirdStep from '@/components/onboarding/ThirdStep.vue';
import Button from '@/components/Button.vue';

const router = useRouter()

const activeStep = ref(1)

const steps = [
    FirstStep,
    SecondStep,
    ThirdStep
]

function nextHandler() {
    if (activeStep.value === 3) return router.push({ name: 'auth' })

    activeStep.value++
}
</script>

<template>
    <main class="flex flex-col justify-between p-7 h-dvh">
        <component :is="steps[activeStep - 1]"></component>
        <div class="flex justify-center gap-2">
            <div class="h-1.5 w-6 rounded-full" :class="activeStep === 1 ? 'bg-[#2C2C2E]' : 'bg-[#E5E5EA]'" />
            <div class="h-1.5 w-6 rounded-full" :class="activeStep === 2 ? 'bg-[#2C2C2E]' : 'bg-[#E5E5EA]'" />
            <div class="h-1.5 w-6 rounded-full" :class="activeStep === 3 ? 'bg-[#2C2C2E]' : 'bg-[#E5E5EA]'" />
        </div>
        <Button :block="true" @click="nextHandler()">{{ activeStep !== 3 ? 'ادامه' : 'ثبت‌نام/ورود' }}</Button>
    </main>
</template>