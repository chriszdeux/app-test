import { useState } from "react"

export const useOpenComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, handleIsOpen }
}