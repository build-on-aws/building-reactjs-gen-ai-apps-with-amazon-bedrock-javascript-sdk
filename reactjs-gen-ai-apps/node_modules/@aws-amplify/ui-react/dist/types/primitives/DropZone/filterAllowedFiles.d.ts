type DragFile = {
    kind: string;
    type: string;
    name?: string;
} | File;
export declare function filterAllowedFiles<FileType extends DragFile = DragFile>(files: FileType[], acceptedFileTypes: string[]): {
    acceptedFiles: FileType[];
    rejectedFiles: FileType[];
};
export {};
