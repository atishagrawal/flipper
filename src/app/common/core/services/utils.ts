import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class utils {

    /**
     * Convert "2018-02-05 13:51:1" into {date, time} object.
     */
    static splitDateTime(dateTime: string): { date: string, time: string } {
        if (!dateTime) { return {date: null, time: null}; }
        const split = dateTime.split(' ');
        return {date: split[0], time: split[1]};
    }

    /**
     * Get object property via dot notation string.
     */
    static getObjectProp(obj: Object, prop: string): any {
        if (!obj) { return null; }
        const arr = prop.split('.');
        while (arr.length && (obj = obj[arr.shift()])) {  }
        return obj;
    }

    /**
     * Flatten specified array of arrays.
     */
    static flattenArray(arrays: any[][]): any[] {
        return [].concat.apply([], arrays);
    }

    static moveArrayElement(array: any[], from: number, to: number) {
        array.splice(to, 0, array.splice(from, 1)[0]);
    }

    static poll(fn: Function, timeout: number = 2000, interval: number = 100): Promise<any> {
        const endTime = Number(new Date()) + timeout;

        const checkCondition = (resolve, reject) => {
            // If the condition is met, we're done!
            const result = fn();
            if (result) { resolve(result); } else if (Number(new Date()) < endTime) {
                setTimeout(checkCondition, interval, resolve, reject);
            } else {
                reject(new Error('timed out for ' + fn));
            }
        };

        return new Promise(checkCondition);
    }
}
