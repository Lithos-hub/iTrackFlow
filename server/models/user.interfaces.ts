/**
 * Represents the role of a user in the system.
 * @typedef {('anon' | 'user' | 'admin')} Role
 *
 * @property {'anon'} anon - Represents an anonymous user (demo version, no CRUD operations).
 * @property {'user'} user - Represents a regular authenticated user.
 * @property {'admin'} admin - Represents an administrator with full privileges.
 */
type Role = 'anon' | 'user' | 'admin';

export interface UserModel {
	name: string;
	lastname: string;
	email: string;
	role: Role;
}
