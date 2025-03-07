import { useState } from "react";
import B10 from "../../assets/images/Images/B10.jpg";
import B11 from "../../assets/images/Images/B11.jpg";
import B13 from "../../assets/images/Images/B13.jpg";
import B14 from "../../assets/images/Images/B14.jpg";
import B15 from "../../assets/images/Images/B15.jpg";
import B16 from "../../assets/images/Images/B16.jpg";
import B17 from "../../assets/images/Images/B17.jpg";
import B18 from "../../assets/images/Images/B18.jpg";
import B19 from "../../assets/images/Images/B19.jpg";
import B20 from "../../assets/images/Images/B20.jpg";
import B21 from "../../assets/images/Images/B21.jpg";
import B22 from "../../assets/images/Images/B22.jpg";
import B23 from "../../assets/images/Images/B23.jpg";
import B24 from "../../assets/images/Images/B24.jpg";
import B25 from "../../assets/images/Images/B25.jpg";
import B26 from "../../assets/images/Images/B26.jpg";
import B27 from "../../assets/images/Images/B27.jpg";
import B28 from "../../assets/images/Images/B28.jpg";
import B29 from "../../assets/images/Images/B29.jpg";
import B30 from "../../assets/images/Images/B30.jpg";
import B31 from "../../assets/images/Images/B31.jpg";
import B32 from "../../assets/images/Images/B32.jpg";
import B33 from "../../assets/images/Images/B33.jpg";   
import B34 from "../../assets/images/Images/B34.jpg";
import B35 from "../../assets/images/Images/B35.jpg";
import B36 from "../../assets/images/Images/B36.jpg";
import B37 from "../../assets/images/Images/B37.jpg";
import B38 from "../../assets/images/Images/B38.jpg";
import B39 from "../../assets/images/Images/B39.jpg";
import B40 from "../../assets/images/Images/B40.jpg";
import B41 from "../../assets/images/Images/B41.jpg";
import B42 from "../../assets/images/Images/B42.jpg";
import B43 from "../../assets/images/Images/B43.jpg";
import B44 from "../../assets/images/Images/B44.jpg";
import B45 from "../../assets/images/Images/B45.jpg";
import B46 from "../../assets/images/Images/B46.jpg";
import B47 from "../../assets/images/Images/B47.jpg";
import B48 from "../../assets/images/Images/B48.jpg";
import B49 from "../../assets/images/Images/B49.jpg";
import B50 from "../../assets/images/Images/B50.jpg";
import B51 from "../../assets/images/Images/B51.jpg";
import B52 from "../../assets/images/Images/B52.jpg";
import B53 from "../../assets/images/Images/B53.jpg";
import B54 from "../../assets/images/Images/B54.jpg";
import B55 from "../../assets/images/Images/B55.jpg";
import B56 from "../../assets/images/Images/B56.jpg";
import B57 from "../../assets/images/Images/B57.jpg";
import B58 from "../../assets/images/Images/B58.JPG";
import B59 from "../../assets/images/Images/B59.JPG";
import B60 from "../../assets/images/Images/B60.JPG";
import B61 from "../../assets/images/Images/B61.JPG";
import B62 from "../../assets/images/Images/B62.JPG";
import B63 from "../../assets/images/Images/B63.jpg";
import B64 from "../../assets/images/Images/B64.JPG";
import B65 from "../../assets/images/Images/B65.JPG";
import B66 from "../../assets/images/Images/B66.JPG";
import B67 from "../../assets/images/Images/B67.JPG";
import B68 from "../../assets/images/Images/B68.JPG";
import B69 from "../../assets/images/Images/B69.JPG";
import B70 from "../../assets/images/Images/B70.jpg";
import B71 from "../../assets/images/Images/B71.jpg";
import B72 from "../../assets/images/Images/B72.jpg";
import B73 from "../../assets/images/Images/B73.jpg";
import B74 from "../../assets/images/Images/B74.jpg";
import B75 from "../../assets/images/Images/B75.jpg";
import B76 from "../../assets/images/Images/B76.jpg";
import B77 from "../../assets/images/Images/B77.jpg";
import B78 from "../../assets/images/Images/B78.jpg";
import B79 from "../../assets/images/Images/B79.jpg";
import B80 from "../../assets/images/Images/B80.jpg";
import B81 from "../../assets/images/Images/B81.jpg";

const image = [
  B10, B11, B13, B14, B15, B16, B17, B18, B19, B20, B21, B22, B23, B24, B25, B26, B27, B28, B29, B30, B31, B32, B33, B34, B35, B36, B37, B38, B39, B40, B41, B42, B43, B44, B45, B46, B47, B48, B49, B50, B51, B52, B53, B54, B55, B56, B57, B58, B59, B60, B61, B62, B63, B64, B65, B66, B67, B68, B69, B70, B71, B72, B73, B74, B75, B76, B77, B78, B79, B80, B81
].map((img) => img);

export default function Image() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(image[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < image.length - 1) {
      setSelectedImage(image[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setSelectedImage(image[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {image.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={prevImage}
            disabled={currentIndex === 0}
          >
            ◀
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[80vh] object-contain rounded-lg"
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={nextImage}
            disabled={currentIndex === image.length - 1}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
