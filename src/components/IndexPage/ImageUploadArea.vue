<template>
    <div class="h-full bg-purple-400 rounded-lg flex flex-col items-center justify-center py-5">
        <p class="text-4xl text-white p-4">Drag / Drop and Upload Your Image</p>
        <DataEntryModal class="mt-5" :modal-options="modalOptions" />
    </div>
</template>

<script setup lang="ts">
import DataEntryModal from "./DataEntryModal.vue";
import type { IModalOptions } from "@/interfaces/IComponents";

const modalOptions: IModalOptions = {
    classes: 'rounded-r-full rounded-l-full bg-blue-700 hover:bg-blue-900 cursor-pointer text-white py-2 px-4', text: 'Upload Image'
}
</script>