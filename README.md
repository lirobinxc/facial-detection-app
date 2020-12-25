# AI Face Detection (aka Face Finder 9000)

## [Try me out](https://lirobinxc.github.io/facial-detection-app/)

#### Made with React, Node.js, Tailwind CSS, Clarifai AI

## Usage

**Input**

An image URL

**Output**
1) Detects faces using Clarifai AI and processes data to apply CSS bounding box around each face in the image
  	- Dev note: Uses map function to dynamically draw bounding box on all detected faces
2) Counts total # of people
 	- Dev note: the figure is more accurate the higher resolution the image
3) Provides AI-analysis of image context.
	- Dev note: Limited to 5 contextual terms to keep away information clutter.

## Future feature ideas
- Extract detected faces using image manipulation
- Allow user to choose specific gender or race to search for in a photo
- Allow user to directly upload own images
