import React from 'react';

const Listing = (props) => {
  const { selectedImage } = props
  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      const reader = new FileReader()

      reader.onload = () => {
        // setImageUrl(reader.result);
        selectedImage(reader.result);
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <div>
      testing listing subComponents
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange} />
        <div>
          {props.label}
          {props.color}
        </div>
    </div>
  )
}

export default Listing
