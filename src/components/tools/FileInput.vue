<template>
    <div class="max-w-xl">

        <label
            class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span v-if="!isUploaded" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-medium text-gray-600">
                    Drop files to Attach, or
                    <span class="text-blue-600 underline">browse</span>
                </span>
            </span>
            <input v-if="!isUploaded" type="file" ref="fileInput" class="hidden" @change="getUploadedFile()">
            <img ref="img" class="rounded-md my-3">
        </label>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fileInput = ref(null)
const img = ref(null)
const emit = defineEmits(['giveFile'])
let isUploaded = ref<boolean>()

const getUploadedFile = () => {
    // @ts-ignore
    emit('giveFile', fileInput.value.files[0])
    const reader = new FileReader()
    // @ts-ignore
    reader.readAsDataURL(fileInput.value.files[0])

    reader.onload = () => {
        // @ts-ignore
        img.value.src = reader.result
        isUploaded.value = true
    }
}
</script>