import { useRef } from "react"
import { useKeyboardShortcut } from "./useKeyboardShortcut"

export function useModal(close: () => void) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current && (event.target as Node).contains(modalRef.current)) {
      close()
    }
  }

  useKeyboardShortcut({
    key: "Escape",
    onKeyPressed: () => close(),
  })

  return { modalRef, handleClickOutside }
}
