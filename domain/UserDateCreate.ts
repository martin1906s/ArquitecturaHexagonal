export class UserDateCreate {
    value: Date;
    constructor(value: Date) {
        this.value = value;
    }

    private ensureIsValid() {
        if (this.value > new Date()) {
            throw new Error('Invalid date of birth');
        }
    }
}