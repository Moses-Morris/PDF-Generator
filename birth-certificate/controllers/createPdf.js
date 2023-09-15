const newBornUser = require("../routes/newborn");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument({size: 'A5', margin: 50, layout: 'landscape'});
const fs = require('fs');
const blobStream  = require('blob-stream'); //for viewing in browser


//create a new PDF document
//doc.pipe(fs.createWriteStream('BirthCertificate2.pdf'));
// Pipe the PDF to a writable stream (e.g., a file)
const stream = fs.createWriteStream('BirthCertificate2.pdf');


/// Set the background color
doc.rect(0, 0, doc.page.width, doc.page.height)
.fillColor('#e5d3b3') // Change '#f0f0f0' to your desired background color
.fill()


// Create a stroke (border) for margin
// Create a smaller margin by reducing the values
const marginX = 20;
const marginY = 20;
const marginWidth = doc.page.width - 2 * marginX;
const marginHeight = doc.page.height - 2 * marginY;
doc.strokeColor('#000000') // Set the stroke color (black in this example)
   .lineWidth(2) // Set the line width (2 points in this example)
   .rect(marginX, marginY, marginWidth, marginHeight) // Define a rectangle as the margin
   .stroke(); // Draw the stroke


// Customize the PDF content
doc.fontSize(24)
   .text('Customized PDF with pdfkit', { align: 'center' })
   .fillColor('#ofofof')
   .fill()



//doc.text('Birth Certificate', 100, 100);
doc.fontSize(25)
.text('Birth Certificate', 100, 80, {
   width: 410,
   align: 'center'
 })
.fillColor('#ofofof')
.fill()


doc.fontSize(20)
.addContent('Courier New')
.text('This Document Acknowledges that ', 100, 150, { align: 'center' })
.fillColor('#ofofof')
.fill()


doc.fontSize(24)
.addContent('Times-Bold')
.text('MOSES MORRIS NJUGUNA ', 100, 200,{ align: 'center' })
.fillColor('#ofofof')
.fill()

doc.moveTo(100, 90)                               // set the current point
   //.lineTo(100, 160)                            // draw a line
   //.quadraticCurveTo(130, 200, 150, 120)        // draw a quadratic curve
   //.bezierCurveTo(190, -40, 200, 200, 300, 150) // draw a bezier curve
   .lineTo(40, 90)                             // draw another line
   .stroke();    

doc.moveTo(150, 100)
.lineTo(100, 100)                             // draw another line
.stroke(); 



//doc.addPage().fontSize(25).text('Here is some vector graphics...', 100, 100);
// Save the PDF to the file
doc.pipe(stream);
doc.end();

//Close the stream when the PDF is finished writing
stream.on('finish', () => {
  console.log('PDF saved to BirthCertificate.pdf');
});
