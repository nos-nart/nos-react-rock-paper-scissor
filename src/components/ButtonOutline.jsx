import React from 'react';

export const ButtonOutline = (props) => {
  return (
    <button onClick={props.click} className="focus:outline-none border border-solid border-purple-500 px-4 py-1 rounded bg-white hover:bg-purple-500 hover:text-white transition-all duration-200">
      { props.children }
    </button>
  )
}
