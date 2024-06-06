import { useEffect } from "react";

interface UseKeyboardShortcutArgs {
  isActive?: boolean;
  key: string;
  onKeyPressed: () => void;
}

export function useKeyboardShortcut({ isActive = true, key, onKeyPressed }: UseKeyboardShortcutArgs) {
  useEffect(() => {
    if (!isActive) return;

    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (e.key === key) {
        e.preventDefault();
        onKeyPressed();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);
}
