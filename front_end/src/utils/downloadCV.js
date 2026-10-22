export function downloadCV() {
  // Cloudinary url
  const fileUrl =
    'https://res.cloudinary.com/dx29auvvm/image/upload/fl_attachment/v1792690082/chrisperaza-cv_ft4eop.pdf';

  // Crate an <a> element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'chrisperaza-cv.pdf'; // Name which will be downloaded

  // Add to DOM, click it and delete it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
