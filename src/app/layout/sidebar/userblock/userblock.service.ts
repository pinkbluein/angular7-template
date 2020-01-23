import { Injectable } from '@angular/core';

@Injectable()
export class UserblockService {
    public userBlockVisible: boolean;
    constructor() {
        this.userBlockVisible  = false;
    }

    getVisibility() {
        return this.userBlockVisible;
    }

    setVisibility(stat = true) {
        this.userBlockVisible = stat;
    }

    toggleVisibility() {
        this.userBlockVisible = !this.userBlockVisible;
    }

}
