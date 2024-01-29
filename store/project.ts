import { Project } from '~/models';

export const useProjectStore = defineStore('project', () => {
	const projects = ref<Project[]>([]);

	const fetchProjects = async () => {
		const { data } = await useFetch('http://localhost:3000/api/projects', {
			headers: {
				'Content-Type': 'application/json',
				token: localStorage.getItem('token') || '',
			},
		});
		projects.value = data.value as Project[];
	};

	const addProject = async (project: Project) => {
		await useFetch('http://localhost:3000/api/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		});
		fetchProjects();
	};

	const deleteProject = async (id: number) => {
		await fetch(`http://localhost:3000/api/projects/${id}`, {
			method: 'DELETE',
		});
		fetchProjects();
	};

	return { projects, fetchProjects, addProject, deleteProject };
});
