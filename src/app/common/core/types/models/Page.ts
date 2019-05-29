export class Page {
	id: number;
	body: string;
	slug: string;
	created_at?: string;
	updated_at?: string;

	constructor(params: Object = {}) {
        for (const name in params) {
            this[name] = params[name];
        }
    }
}
