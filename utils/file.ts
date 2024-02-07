type FileType = 'image' | 'video' | 'audio';

/**
 * Checks if the file type matches the specified check type.
 * @param file - The file object to check.
 * @param checkType - The type to check against ('image' or 'audio').
 * @returns True if the file type matches the check type, false otherwise.
 */
export const checkFileType = ({ type }: File, checkType: FileType) => {
	// Image types files
	const imageType = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml'];
	// Audio types files
	const audioType = ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/midi'];

	if (checkType === 'image') {
		return imageType.includes(type);
	}

	if (checkType === 'audio') {
		return audioType.includes(type);
	}

	return false;
};
