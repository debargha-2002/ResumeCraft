
# ResumeCraft

It is a website for creating professional resume by filling required details like personal details, educational details, project details, working experience etc. It has a built-in template for generating resume. User can download their resume in PDF format.


## API Reference

#### POST call for sending form data

```http
  POST /api/v1/generatepdf
```

| Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `From request body` | `string` | **Required**. Form data |




## Deployment

To build this project run

```bash
  npm run build
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`




## Run Locally

Clone the project

```bash
  git clone https://github.com/debargha-2002/ResumeCraft.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start both server and frontend (used npm concurrently package)

```bash
  npm run dev
```


## Demo

Project is live at 
https://resume-craft-snowy.vercel.app/


## Screenshots
Homepage

![App Screenshot](https://github.com/debargha-2002/modernchair/blob/main/Screenshot%202024-11-20%20173712.png)



Create Resume

![App Screenshot](https://github.com/debargha-2002/modernchair/blob/main/Screenshot%202024-11-20%20173821.png)


Download Resume

![App Screenshot](https://github.com/debargha-2002/modernchair/blob/main/Screenshot%202024-11-20%20173921.png)


Resume Sample

![App Screenshot](https://github.com/debargha-2002/modernchair/blob/main/Screenshot%202024-11-20%20195959.png)

