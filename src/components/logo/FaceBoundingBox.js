import React from 'react';

export default function FaceBoundingBox({url, arr}) {
  let width;
  let height;
  function getImageDimensions() {
    let img = new Image();
    img.onload = function() {
      width = this.width
      height = this.height
    }
    img.src = url;
  }
  getImageDimensions();

  // bottom_row: 0.7939589
  // left_col: 0.25699368
  // right_col: 0.69415236
  // top_row: 0.22450554

  let boundingBoxArr = [];
  function calculateBoundingBox() {
    for (let i of arr) {
      boundingBoxArr.push({
        top: `${i.top_row * 100}%`,
        left: `${i.left_col * 100}%`,
        right: `${i.right_col * 100}%`,
        bottom: `${i.bottom_row * 100}%`
      })
    }
    
    console.log(`📢 ~ calculateBoundingBox ~ boundingBoxArr`, boundingBoxArr);
  }
  calculateBoundingBox();



  let display = boundingBoxArr.map((ele, index) => (
    <div key={index} className="boundingBox" style={{border: "5px solid white"}}>
    </div>
  ))

  return display;
}

