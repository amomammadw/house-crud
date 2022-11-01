<template>
    <div>
        <div v-for="cardItem, cardIndex in filterdHouseList" :key="cardIndex"
            class="card card-compact p-3 bg-base-100 shadow-xl my-4">
            <div class="grid grid-cols-12 justify-items-stretch">

                <div class="col-span-12 md:col-span-6">
                    <div class="flex flex-wrap justify-center md:justify-start text-center md:text-start space-x-3">
                        <div class="card-title" v-if="cardItem.imgSrc">
                            <img class="rounded-md" :src="cardItem.imgSrc" width="100" alt="Shoes" />
                        </div>

                        <div class="my-auto">
                            <h2>{{ cardItem.name }}</h2>
                            <p v-if="cardItem.pic">
                                Pic Name : {{ cardItem.pic.name }}
                                <br>
                                Size: {{ cardItem.pic.size }} Bytes
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-6 justify-self-center md:justify-self-end mt-3 md:mt-0">
                    <HouseCardActionButtons @edit-item="editHouse(cardItem)" @delete-item="deleteHouse(cardItem)" />
                </div>
            </div>
        </div>
        <DataEntryModal :house-data="selectedHouseInfo">
            <a href="#upload-modal" ref="externalModalActivator">
            </a>
        </DataEntryModal>
    </div>
</template>

<script setup lang="ts">
import type { EHouseCategory, IHouseInfo, IModalOptions } from '@/interfaces/IComponents';
import { useHouseInfo } from '@/stores/store';
import { type PropType, ref } from 'vue';
import DataEntryModal from '../IndexPage/DataEntryModal.vue';
import HouseCardActionButtons from './HouseCardActionButtons.vue';

const props = defineProps({
    filterBy: {
        type: Number as PropType<EHouseCategory>,
        required: true
    }
})

let store = useHouseInfo()
const filterdHouseList = store.filterHouse(props.filterBy)
const reader = new FileReader()

let externalModalActivator = ref<any>(null)
let selectedHouseInfo = ref<IHouseInfo>()

filterdHouseList.forEach(elem => {
    if (elem.pic) {
        // @ts-ignore
        reader.readAsDataURL(elem.pic)

        reader.onload = () => {
            // @ts-ignore
            elem.imgSrc = reader.result
        }
    }
})

const deleteHouse = (item: IHouseInfo) => {
    console.log('Delete Clicked', item);
}
const editHouse = (item: IHouseInfo) => {
    console.log('Edit Clicked', item);
    selectedHouseInfo.value = item
    externalModalActivator.value.click()
}

</script>
