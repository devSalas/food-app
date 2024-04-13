export interface User {
	id?: number;
	name: string;
	image?: string;
	address: string;
	email: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
    rol_id?:number
}
