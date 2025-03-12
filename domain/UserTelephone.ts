export class UserTelephone {
    value: string;
    constructor(value: string) {
        this.value = value;
    }

    private telephoneIsValid() {
        if (this.value.length < 10 || this.value.length > 10) {
            throw new Error('Invalid telephone number');
        }
    }
}