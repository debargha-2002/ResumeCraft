module.exports = ({
    name,
    email,
    phone,
    linkedin,
    github,
    skills,
    experiences,  // an array of experiences
    projects,     // an array of projects
    education,    // an array of education
    extra_1,
    extra_2,
  }) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume</title>
      <!-- Font Awesome for icons -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          body {
              font-family: 'Arial', sans-serif;
               background-color: #ffffff;
              color: #333;
              line-height: 1.6;
              width: 100%;
              height: 100%;
          }
          .container {
              max-width: 210mm;
              margin: 0 auto;  /* Center the container */
              padding: 10mm 5mm;  /* Padding reduced to allow more space */
              background-color: #ffffff;
              border-radius: 8px;
             
          }
          h1 {
              font-size: 2.8em;
              color: #333;
              font-weight: 700;
              margin-bottom: 10px;
              text-align: center;
          }
          h2 {
              font-size: 1.5em;
              color: #007bff;
              font-weight: 600;
              margin-bottom: 10px;  /* Spacing between title and content */
              border-bottom: 2px solid #007bff;
              padding-bottom: 5px;
              width: fit-content;
              margin-left: 0;
          }
          h3 {
              font-size: 1.2em;
              font-weight: 600;
              color: #555;
              margin-bottom: 5px;
          }
          .education-row {
              display: flex;
              justify-content: space-between;
             
              margin-bottom: -10px;
             
          }
          .contact-info {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
              margin-bottom: 20px;
              font-size: 1.2em;
              color: #007bff;
          }
          .contact-info i {
              color: #007bff;
              font-size: 1.2em;
              margin-right: 5px;
          }
          .contact-info a {
              color: #007bff;
              text-decoration: none;
              transition: color 0.3s ease;
              border-bottom: 2px solid #007bff;
          }
          .contact-info a:hover {
              color: #0056b3;
          }
          .skills ul {
              list-style: none;
              padding: 0;
              margin-top: 10px; /* Space between title and skill boxes */
              text-align: center;
          }
          .skills li {
              background-color: #eef1f5;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 1em;
              color: #555;
              font-weight: 500;
              display: inline-block;  /* This will make the skill boxes inline */
              margin-right: 15px;  /* Adds space between boxes */
              margin-bottom: 10px;  /* Adds vertical space if the items wrap */
          }
          .section {
              margin-bottom: 20px;
          }
          .section-title {
              font-size: 1.4em;
              font-weight: 600;
              color: #333;
              margin-bottom: 10px;
              padding-bottom: 0px;
              border-bottom: 2px solid #007bff;
          }
          .experience, .education, .projects {
              padding-left: 0;
          }
        
          .experience h3, .education h3, .projects h3 {
              font-size: 1.1em;
              font-weight: 600;
              color: #333;
          }
          .experience p, .education p, .projects p {
              font-size: 1em;
              color: #555;
          }
          .project-link {
              color: #007bff;
              text-decoration: none;
          }
          .project-link:hover {
              text-decoration: underline;
          }
          .unified{
             display: flex;
             flex-direction: column;
             margin-bottom: 15px;
            
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>${name}</h1>
          <div class="contact-info">
              <p><i class="fas fa-envelope"></i><a href="mailto:${email}">${email}</a></p>
              <p><i class="fas fa-phone-alt"></i>${phone}</p>
              <p><i class="fab fa-linkedin"></i><a href="${linkedin}" target="_blank">${linkedin}</a></p>
              <p><i class="fab fa-github"></i><a href="${github}" target="_blank">${github}</a></p>
          </div>
  
          <!-- Skills Section -->
          ${skills?.trim() ? `
          <div class="section skills">
              <h2 class="section-title">Skills</h2>
              <ul>
                  ${skills.split(',').map(skill => skill?.trim()).filter(skill => skill !== '').map(skill => `<li>${skill}</li>`).join('')}
              </ul>
          </div>` : ''}
  
          <!-- Work Experience -->
          ${experiences && experiences.length ? `
          <div class="section experience">
              <h2 class="section-title">Work Experience</h2>
              ${experiences.map((exp) => `
              <div class=" unified" >
                  <div class="education-row">
                      <h3>${exp.org} - ${exp.position}</h3>
                      <p><strong>Duration:</strong> ${exp.duration}</p>
                  </div>
                  <p>${exp.description}</p>
              </div>`).join('')}
          </div>` : ''}
  
          <!-- Projects -->
          ${projects && projects.length ? `
          <div class="section projects">
              <h2 class="section-title">Projects</h2>
              ${projects.map((proj) => `
              <div class="unified">
                  <div class="education-row">
                      <h3>${proj.title}</h3>
                      <p><a href="${proj.link}" class="project-link" target="_blank">Link</a></p>
                  </div>
                  <p>${proj.description}</p>
              </div>`).join('')}
          </div>` : ''}
  
          <!-- Education -->
          ${education && education.length ? `
          <div class="section education">
              <h2 class="section-title">Education</h2>
              ${education.map((edu) => `
              <div class="unified">
                  <div class="education-row">
                      <h3>${edu.school}</h3>
                      <p><strong>Year:</strong> ${edu.year}</p>
                  </div>
                  <div class="education-row">
                      <p style=" font-weight: 600; font-size: 1rem;">${edu.qualification}</p>
                      <p><strong>Grade:</strong> ${edu.grade}</p>
                  </div>
              </div>`).join('')}
          </div>` : ''}
  
          <!-- Additional Information -->
          ${extra_1 || extra_2 ? `
          <div class="section extra">
              <h2 class="section-title">Additional Information</h2>
              ${extra_1?`<p><strong>Achievements:</strong>${extra_1}</p>`:``}
              ${extra_2?`<p><strong>Hobbies:</strong>${extra_2}</p>`:``}
          </div>` : ''}
  
      </div>
  </body>
  </html>
    `;
  };
  