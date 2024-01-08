export interface Project {
	id: number;
	name: string;
	description?: string;
	owner?: string;
	created_at?: string;
	updated_at?: string;
	category: 'harmony' | 'production';
}

export interface ProjectCard {
	project?: Project;
}
