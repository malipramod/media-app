interface UseDebounceParams {
  delay?: number;
}

export const useDebounce = ({ delay = 500 }: UseDebounceParams) => {
  let clearTimeoutId: number = 0;

  const handleOnDebounce = (
    search: string,
    onCallback: (args: unknown) => void
  ) => {
    if (clearTimeoutId) {
      clearTimeout(clearTimeoutId);
    }
    clearTimeoutId = window.setTimeout(() => {
      onCallback(search);
    }, delay);
  };

  return { onDebounce: handleOnDebounce };
};
