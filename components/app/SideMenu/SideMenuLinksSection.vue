<template>
	<article>
		<hr class="sidemenu__separator" />
		<div class="sidemenu__block">
			<label class="sidemenu__label">
				{{ label }}
			</label>
			<RouterLink
				v-for="{ label: linkLabel, to } of links"
				:key="linkLabel"
				:to="to"
				active-class="text-primary font-bold">
				{{ linkLabel }}
			</RouterLink>
			<div v-for="{ label: submenuLabel, links: submenuLinks } of submenus" :key="submenuLabel">
				<div class="sidemenu__block">
					<label class="sidemenu__label">
						{{ submenuLabel }}
					</label>
					<RouterLink
						v-for="{ label: linkLabel, to: submenuTo } of submenuLinks"
						:key="linkLabel"
						:to="submenuTo"
						active-class="text-primary font-bold">
						{{ linkLabel }}
					</RouterLink>
				</div>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
interface SideMenuLink {
	label: string;
	to: string;
}
interface SubMenu {
	label: string;
	links: SideMenuLink[];
}

interface SideMenuSectionProps {
	label: string;
	links: SideMenuLink[];
	submenus?: SubMenu[];
}

defineProps<SideMenuSectionProps>();
</script>
