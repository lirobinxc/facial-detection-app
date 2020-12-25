import React from 'react';

export default function FaceBoundingBox({url, arr}) {

  let boundingBoxArr = [];
  function calculateBoundingBox() {
    for (let i of arr) {
      boundingBoxArr.push({
        top: `${i.top_row * 100}%`,
        left: `${i.left_col * 100}%`,
        right: `${(1 - i.right_col) * 100}%`,
        bottom: `${(1 - i.bottom_row) * 100}%`
      })
    }
  }
  calculateBoundingBox();



  let display = boundingBoxArr.map((ele, index) => {
    return (<div key={index} className="boundingBox z-10" style={ele}>
    </div>)
  })

  return display;
}

