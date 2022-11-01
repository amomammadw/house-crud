<template>
    <div class="mx-5 rounded-xl shadow-lg p-4">
        <HouseListHeader />

        <div class="tabs justify-center my-3">
            <a v-for="tabItem in houseCategories" :key="tabItem.value" class="tab tab-bordered"
                :class="{ 'tab-active': tabItem.value === selectedTab }" @click="changeTab(tabItem.value)">
                {{ tabItem.text }}
            </a>
        </div>
        <HouseCard :key="houseCardKey" :filter-by="selectedTab" />

    </div>
</template>

<script setup lang="ts">
import HouseListHeader from "../components/ListPage/HouseListHeader.vue";
import HouseCard from "../components/ListPage/HouseCard.vue";
import { EHouseCategory, type IHouseCategory } from "@/interfaces/IComponents";
import { ref } from "vue";

let houseCategories: IHouseCategory[] = [
    { text: 'Living Room', value: EHouseCategory.LivingRoom },
    { text: 'Kitchen', value: EHouseCategory.Kitchen },
    { text: 'Dinning Room', value: EHouseCategory.DinningRoom },
]
let selectedTab = ref(0)
let houseCardKey = ref(0)

const changeTab = (tabItem: number) => {
    selectedTab.value = tabItem
    houseCardKey.value++
}
</script>
