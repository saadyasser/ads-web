// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const TestForm = ({ onSubmit }) => {
//   const [images, setImages] = useState<File[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     images.forEach((image, index) =>
//       formData.append(`images[${index}]`, image)
//     );
//     onSubmit(images);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setImages([...e.target.files]);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       {/* <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Product Name"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Product Description"
//         required
//       />
//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setPrice(parseFloat(e.target.value))}
//         placeholder="Product Price"
//         required
//       /> */}
//       <input type="file" onChange={handleImageChange} multiple required />
//       <button type="submit">Create Product</button>
//     </form>
//   );
// };

// export default TestForm;
