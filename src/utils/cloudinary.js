const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API key and secret
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

export default cloudinary;

// Example of uploading an image
// cloudinary.uploader.upload('path/to/your/image.jpg', { folder: 'your_folder_name' }, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//     // The result object will contain information about the uploaded image
//   }
// });
