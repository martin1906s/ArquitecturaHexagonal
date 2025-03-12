export class UserName{
    value: string;
    constructor(value: string) {
        this.value = value;
    }

    private nameIsValid() {
        if (this.value.length < 3) {
            throw new Error('Invalid name');
        }
    }
}