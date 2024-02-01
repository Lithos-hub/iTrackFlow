/**
 * Represents the role of a user in the system.
 * @typedef {('guest' | 'default' | 'admin')} Role
 *
 * @property {'guest'} guest - Represents an anonymous user (demo version, no CRUD operations).
 * @property {'default'} default - Represents a regular authenticated user.
 * @property {'admin'} admin - Represents an administrator with full privileges.
 */
type Role = 'guest' | 'default' | 'admin';

export interface UserModel {
	name: string;
	lastname: string;
	email: string;
	role: Role;
}
