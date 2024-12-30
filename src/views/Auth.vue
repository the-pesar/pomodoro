<script lang="ts" setup>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const vFocus = {
    mounted: (el: HTMLElement) => setTimeout(() => el.focus(), 500)
}

const metaTag = document.querySelector('meta[name="theme-color"]')!;
metaTag.setAttribute('content', '#F2F2F7');
</script>

<template>
    <main class="flex flex-col justify-end bg-[#F2F2F7] p-7 h-dvh">
        <h1 class="font-bold text-xl mb-2">ثبت‌نام یا ورود</h1>
        <p class="text-[#8E8E93]">لطفا شماره موبایل خود را وارد نمایید.</p>
        <Input class="my-5" placeholder="مثال: ۰۹۱۰۲۶۵۰۹۷۱" />
        <Button>ارسال کد تایید</Button>
    </main>
</template>