<template>
    <div class="h-screen flex items-center justify-center">
        <div class="mx-5 rounded-xl shadow-lg p-4">
            <div class="grid grid-cols-12">
                <ImageUploadArea class="col-span-full md:col-span-6 mr-2" />
                <img src="@/assets/img/pic.jpeg" class="hidden ml-2 md:block md:col-span-6 rounded-lg" alt="image">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ImageUploadArea from '../components/IndexPage/ImageUploadArea.vue'
</script>
