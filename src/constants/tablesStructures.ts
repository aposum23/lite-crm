import {ColumnType} from "../types/tableTypes.ts";

const dealsTable: ColumnType[] = [
    {
        label: 'Код',
        responseId: 'id'
    },
    {
        label: 'Наименование',
        responseId: 'name'
    },
    {
        label: 'Цена, руб.',
        responseId: 'price',
    }
];

const contactTable: ColumnType[] = [
    {
        label: 'Код',
        responseId: 'id'
    },
    {
        label: 'Наименование',
        responseId: 'name'
    },
    {
        label: 'Имя',
        responseId: 'first_name'
    },
    {
        label: 'Фамилия',
        responseId: 'last_name'
    }
];

const companyTable: ColumnType[] = [
    {
        label: 'Код',
        responseId: 'id'
    },
    {
        label: 'Наименование',
        responseId: 'name'
    }
];

export const TABLE_STRUCTURES: {[K:number]: ColumnType[]} = {
    1: dealsTable,
    2: contactTable,
    3: companyTable
}