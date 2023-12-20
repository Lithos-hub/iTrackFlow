export const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const observer = ref<IntersectionObserver | null>(null);
    const entry = ref<IntersectionObserverEntry | null>(null);
    const isIntersecting = ref(false);

    const setObserver = (el: HTMLElement | null) => {
        if (observer.value) {
            observer.value.disconnect();
        }

        if (el) {
            observer.value = new IntersectionObserver(
                (entries) => {
                    entry.value = entries[0];
                    isIntersecting.value = entries[0].isIntersecting;
                },
                {
                    ...options,
                }
            );
            observer.value.observe(el);
        }
    };

    return {
        setObserver,
        entry,
        isIntersecting,
    };
};