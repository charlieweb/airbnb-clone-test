'use client'

import { useCallback, useEffect, useState } from 'react'
import { X } from 'lucide-react'
import ButtonM from '../ui/ButtonM'
import clsx from 'clsx'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setshowModal] = useState(isOpen)

  useEffect(() => {
    setshowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    setshowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      onSubmit()
    }
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }
    secondaryAction()
  }, [disabled, secondaryAction])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 inset-0 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 
          mx-auto h-full lg:h-auto md:h-auto">
          <div className={clsx(
            "translate duration-300 h-full",
            {
              "translate-y-o": showModal,
              "opacity-100": showModal,
              "translate-y-full": !showModal,
              "opacity-0": !showModal
            }
          )}>
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              { /* Header */}
              <div className="flex items-center p-6 rounded-t justify-center 
              relative border-b-[1px">
                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                 <X />
                </button>
                <div className="font-bold text-lg">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {
                    secondaryAction && secondaryActionLabel && (
                      <ButtonM outline label={secondaryActionLabel} onClick={secondaryAction} disabled={disabled} />
                    )}
                  
                  <ButtonM label={actionLabel} onClick={handleSubmit} disabled={disabled} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
