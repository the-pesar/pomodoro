<script lang="ts" setup>

defineProps<{
    block?: boolean
}>()

</script>

<template>
    <button class="bg-[#2C2C2E] rounded-2xl text-white py-5 font-bold active:scale-90 transition-transform"
        :class="[block && 'w-full',]">
        <slot />
    </button>
</template>