function filterAllowedFiles(files, acceptedFileTypes) {
    // Allow any files if acceptedFileTypes is undefined, empty array, or contains '*'
    if (!acceptedFileTypes ||
        acceptedFileTypes.length === 0 ||
        acceptedFileTypes.includes('*')) {
        return { acceptedFiles: files, rejectedFiles: [] };
    }
    const acceptedFiles = [];
    const rejectedFiles = [];
    function filterFile(file) {
        const { type = '', name = '' } = file;
        const mimeType = type.toLowerCase();
        const baseMimeType = mimeType.split('/')[0];
        return acceptedFileTypes.some((type) => {
            const validType = type.trim().toLowerCase();
            // if the accepted file type is a file extension
            // it will start with '.', check against the file name
            if (validType.charAt(0) === '.') {
                return name.toLowerCase().endsWith(validType);
            }
            // This is something like a image/* mime type
            if (validType.endsWith('/*')) {
                return baseMimeType === validType.split('/')[0];
            }
            return mimeType === validType;
        });
    }
    files.forEach((file) => {
        (filterFile(file) ? acceptedFiles : rejectedFiles).push(file);
    });
    return { acceptedFiles, rejectedFiles };
}

export { filterAllowedFiles };
