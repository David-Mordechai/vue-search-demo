import { boat } from "../models/boat";

export const search = async (searchCriteria: string, subCriteria: string) => {
    let result: boat[] = [];
    const hasSearchCriteria = searchCriteria !== undefined && searchCriteria !== '';
    const hasSubCriteria = subCriteria !== undefined && subCriteria !== '';

    if (hasSearchCriteria && !hasSubCriteria) {
        result = boats
            .filter(item => Object.values(item)
                .some(value => String(value).toLowerCase()
                    .includes(searchCriteria!.toLowerCase())));
    }
    else if (!hasSearchCriteria && hasSubCriteria) {
        result = boats
            .filter(item => item.year.toString() === subCriteria);
    }
    else if (hasSearchCriteria && hasSubCriteria) {
        result = boats
            .filter(item => item.year.toString() === subCriteria)
            .filter(item => Object.values(item)
                .some(value => String(value).toLowerCase()
                    .includes(searchCriteria!.toLowerCase())));
    }

    return result;
}

export const subCriteriesList = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
]

const boats = [
    {
        name: 'Speedster',
        speed: 35,
        length: 22,
        price: 300000,
        year: 2021,
    },
    {
        name: 'OceanMaster',
        speed: 25,
        length: 35,
        price: 500000,
        year: 2020,
    },
    {
        name: 'Voyager',
        speed: 20,
        length: 45,
        price: 700000,
        year: 2019,
    },
    {
        name: 'WaveRunner',
        speed: 40,
        length: 19,
        price: 250000,
        year: 2022,
    },
    {
        name: 'SeaBreeze',
        speed: 28,
        length: 31,
        price: 450000,
        year: 2018,
    },
    {
        name: 'HarborGuard',
        speed: 18,
        length: 50,
        price: 800000,
        year: 2017,
    },
    {
        name: 'SlickFin',
        speed: 33,
        length: 24,
        price: 350000,
        year: 2021,
    },
    {
        name: 'StormBreaker',
        speed: 22,
        length: 38,
        price: 600000,
        year: 2020,
    },
    {
        name: 'WindSail',
        speed: 15,
        length: 55,
        price: 900000,
        year: 2019,
    },
    {
        name: 'FastTide',
        speed: 37,
        length: 20,
        price: 280000,
        year: 2022,
    },
]