<template>
	<div>Dynamic harmony route page</div>
</template>

<script setup lang="ts">
const getProject = async () => {
	const { data } = await useFetch('/api/projects', {
		method: 'GET',
	});
	console.log(data);
};

onMounted(() => getProject());
</script>

<style scoped></style>
