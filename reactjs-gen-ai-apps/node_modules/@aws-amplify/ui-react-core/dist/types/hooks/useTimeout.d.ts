export default function useTimeout({ callback, delay, }: {
    callback?: () => void;
    delay?: number;
}): void;
