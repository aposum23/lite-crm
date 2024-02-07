import { defineStore } from "pinia";
import {ref} from 'vue';
import {getDeals} from "../api/deal/getDeals.ts";
import {getContact} from "../api/contact/getContact.ts";
import {getCompany} from "../api/company/getCompany.ts";

export const useTableStore = defineStore('table', () => {
    const data = ref();
    const tableType = ref<number>(0);
    const getRequestFunctions = {
        1: getDeals,
        2: getContact,
        3: getCompany
    }

    const updateTableType = (value: number) => {
        tableType.value = value;
        getData()
    }

    const getData = () => {
        console.log('gagagagaga');
        if (getRequestFunctions[tableType.value]) {
            getRequestFunctions[tableType.value]().then((response) => {
                data.value = response
            })
        }
    }

    return {
        data,
        tableType,
        updateTableType
    }
})