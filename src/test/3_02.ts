import {CityType, GovernmentBuildingsType, HouseType} from "./02";


export const changeBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    return buildings.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (city: CityType, number: number) => {
    city.governmentBuildings[0].staffCount -= 20;
}

export const toHireStaff = (city: CityType, number: number) => {
 city.governmentBuildings[0].staffCount += 20;
}