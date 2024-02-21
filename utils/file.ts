type FileType = 'image' | 'video' | 'audio';

/**
 * Checks if the file type matches the specified check type.
 * @param file - The file object to check.
 * @param checkType - The type to check against ('image' or 'audio').
 * @returns True if the file type matches the check type, false otherwise.
 */
export const checkFileType = ({ type }: File, checkType: FileType, explicitFormats?: string[]) => {
	// Image types files
	const imageType = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml'];
	// Audio types files
	const audioType = ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/midi'];

	if (explicitFormats) {
		return explicitFormats.includes(type);
	}

	if (checkType === 'image') {
		return imageType.includes(type);
	}

	if (checkType === 'audio') {
		return audioType.includes(type);
	}

	return false;
};

export const checkAndSetFiles = (files: File[] | FileList | null, explicitFormats?: string[]) => {
	if (!files) return;

	const file = files[0];

	if (!file || !checkFileType(file, 'audio', explicitFormats)) {
		throw new Error('Invalid file type');
	}

	return files;
};
