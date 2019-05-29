import { User } from './User';

export class Role {
    id: number;
    name: string;
    display_name: string;
    permissions?: string;
    default: boolean;
    guests: boolean;
    created_at?: string;
    updated_at?: string;
    users?: User[];

    constructor(params: Object = {}) {
        for (const name in params) {
            this[name] = params[name];
        }
    }
}
