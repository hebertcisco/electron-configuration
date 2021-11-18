import { groups } from './json/groups.json';
import { IGroups } from './@types/PeriodicTable.type';
import { IPeriodicTable } from './@types/PeriodicTable.interface';


export default class PeriodicTable implements IPeriodicTable {
    groups(): IGroups[] {
        return groups;
    }
}