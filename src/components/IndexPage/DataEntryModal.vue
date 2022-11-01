<template>
    <div>
        <slot></slot>
        <a v-if="modalOptions" href="#upload-modal" :class="modalOptions.classes"> {{ modalOptions.text }}
        </a>
        <div class="modal" id="upload-modal">
            <div class="modal-box">
                <a href="#" for="my-modal-3" class="btn btn-xs btn-circle absolute right-4 top-4">✕</a>

                <h3 class="font-bold text-lg text-center">
                    {{ houseData ? 'Edit Image' : 'Upload Image' }}
                </h3>

                <FileInput @giveFile="takeFile($event)" class="my-4" />

                <form class="form-control">

                    <label for="#house-name">House Name</label>
                    <input v-model="houseInfo.name" type="text" id="house-name"
                        class="w-full my-3 input input-bordered">

                    <label for="#house-cat">House Category</label>
                    <select v-model="houseInfo.category" class="select select-bordered w-full my-3" id="house-cat">
                        <option v-for="catItem, catIndex in houseCategories" :value="catItem.value" :key="catIndex">
                            {{ catItem.text }}
                        </option>
                    </select>
                </form>

                <div class="modal-action flex justify-center">
                    <a @click="saveHouse()"
                        class="rounded-r-full rounded-l-full bg-blue-700 hover:bg-blue-900 cursor-pointer text-white py-2 px-4">Save
                        House</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type PropType, reactive } from 'vue';
import { type IModalOptions, type IHouseCategory, EHouseCategory, type IHouseInfo } from '@/interfaces/IComponents'
import FileInput from '../tools/FileInput.vue'
import { useHouseInfo } from "@/stores/store";
import router from '@/router';

// Component Props
const props = defineProps({
    modalOptions: {
        type: Object as PropType<IModalOptions>
    },
    houseData: {
        type: Object as PropType<IHouseInfo>
    }
})
// Component Props

// Store
const store = useHouseInfo()
// Store

let houseInfo = reactive({} as IHouseInfo)

// Emitted Function From Child
const takeFile = (event: InputEvent) => {
    houseInfo.pic = event
}
// Emitted Function From Child

// House Categories
let houseCategories: IHouseCategory[] = [
    { text: 'Living Room', value: EHouseCategory.LivingRoom },
    { text: 'Kitchen', value: EHouseCategory.Kitchen },
    { text: 'Dinning Room', value: EHouseCategory.DinningRoom },
]
// House Categories

// Save House Function
const saveHouse = () => {
    store.saveHouseInfo(houseInfo)
    location.href = "#"
    router.push('HouseList')
}
</script>