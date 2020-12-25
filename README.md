# AI Face Dectection

### Made with React, TailwindCSS, Node.js, Clarifai AI

## Usage

**Input** 
An image URL

**Output**
1) Detects faces using Clarifai AI and processes data to apply CSS bounding box around each face in the image
  - uses map function to dynamically draw bounding box on all detected faces
2) Counts total # of people
  - the figure is more accurate the higher resolution the image
3) Provides AI-analysis of image context.

## Future feature ideas
- extract detected faces using image manipulation
- allow user to choose specific gender or race to search for in a photo
- allow user to directly upload own images