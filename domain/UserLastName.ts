export class UserLastName{
    value: string;
    constructor(value: string) {
        this.value = value;
    }

    private lastNameIsValid() {
        if (this.value.length < 3) {
            throw new Error('Invalid last name');
        }
    }
}