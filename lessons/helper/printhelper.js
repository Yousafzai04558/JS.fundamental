export function printage(age) {
    console.log(age);
}

export class customerdetails {
    printfirstname(firstname) {
        console.log(firstname);
    }
    /**
     * the method will print the last name
     * @param {*} lastname 
     */
    printlastname(lastname) {
        console.log(lastname);
    }
}
export const customer = new customerdetails();