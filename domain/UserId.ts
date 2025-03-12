export class UserId {
    value: string;
    constructor(value: string) {
        this.value = value;
    }

    private idIsValid() {
        if (this.value.length < 5) {
            throw new Error('Invalid id');
        }
    }
}