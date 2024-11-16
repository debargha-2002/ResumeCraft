const puppeteer = require('puppeteer');
const PDFtemplate = require('../template/pdfTemplate')
const path = require("path")
exports.generatePdf = async(req,res)=>{
  try {
    
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Important for cloud environments
      });
    const page = await browser.newPage();
    
   console.log(req.body)
    const content = PDFtemplate(req.body);

    // Set the page content
    await page.setContent(content);
    const filePath = path.join(__dirname, '..','generated','Resume.pdf');
    console.log("dirname",__dirname);
   
    const pdfBuffer = await page.pdf({
        format: 'A4',          
        printBackground: true,
        path:filePath  
    });

    
    await browser.close();

    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Resume.pdf');
    res.sendFile(filePath); 

    console.log("PDF generated and sent successfully!");
} catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send({ message: "Failed to create PDF", error:error.message });
}

}