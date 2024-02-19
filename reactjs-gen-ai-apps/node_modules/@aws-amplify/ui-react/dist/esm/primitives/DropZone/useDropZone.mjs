import { useState } from 'react';
import { isFunction } from '@aws-amplify/ui';
import { filterAllowedFiles } from './filterAllowedFiles.mjs';

function useDropZone({ onDropComplete, onDragEnter: _onDragEnter, onDragLeave: _onDragLeave, onDragOver: _onDragOver, onDragStart: _onDragStart, onDrop: _onDrop, acceptedFileTypes = [], }) {
    const [dragState, setDragState] = useState('inactive');
    const onDragStart = (event) => {
        event.dataTransfer.clearData();
        if (isFunction(_onDragStart)) {
            _onDragStart(event);
        }
    };
    const onDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (isFunction(_onDragEnter)) {
            _onDragEnter(event);
        }
    };
    const onDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragState('inactive');
        if (isFunction(_onDragLeave)) {
            _onDragLeave(event);
        }
    };
    const onDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
        if (isFunction(_onDragOver)) {
            _onDragOver(event);
        }
        const files = Array.from(event.dataTransfer.items).map(({ kind, type }) => ({
            kind,
            type,
        }));
        const { rejectedFiles } = filterAllowedFiles(files, acceptedFileTypes);
        setDragState(rejectedFiles.length > 0 ? 'reject' : 'accept');
    };
    const onDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragState('inactive');
        const files = Array.from(event.dataTransfer.files);
        const { acceptedFiles, rejectedFiles } = filterAllowedFiles(files, acceptedFileTypes);
        if (isFunction(_onDrop)) {
            _onDrop(event);
        }
        if (isFunction(onDropComplete)) {
            onDropComplete({ acceptedFiles, rejectedFiles });
        }
    };
    return {
        onDragStart,
        onDragEnter,
        onDragLeave,
        onDragOver,
        onDrop,
        dragState,
    };
}

export { useDropZone };
