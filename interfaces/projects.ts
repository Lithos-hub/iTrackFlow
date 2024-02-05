export interface Project {
	id: string;
	name: string;
	description?: string;
	owner?: string;
	created_at?: string;
	updated_at?: string;
	image?: string;
	category: 'harmony' | 'production';
	year?: number;
}

export interface ProjectRow {
	project?: Project;
}
