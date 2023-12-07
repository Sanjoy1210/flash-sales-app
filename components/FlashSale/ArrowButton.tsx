import React from 'react'
import { IconType } from 'react-icons';

type ArrowButtonProps = {
    onClick: () => void,
    Icon: IconType,
    isShown: boolean,
    isLeft: boolean,
};

export default function ArrowButton({ onClick, Icon, isShown, isLeft }: ArrowButtonProps) {
  return (
    <button 
        onClick={onClick} 
        className={`absolute flex items-center justify-center bg-white rounded-full w-6 h-6 shadow-md text-lg text-light-gray top-1/2 ${isLeft ? 'left-0' : 'right-0'} transform -translate-y-1/2 ${isShown ? 'hidden' : 'block'}`}
    >
        <Icon />
    </button>
  )
}
