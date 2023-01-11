import React from 'react'

const CustomButton = ({ btnType, title, style, handleClick }) => {
    return (
        <button
            type={btnType}
            className={`${style} font-epilogue font-semibold text-[16px] text-white min-h-[52px] rounded-[10px] leading-[26px] px-4`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton