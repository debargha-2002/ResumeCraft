import React, { useState } from 'react';
import Loading from './Loading';
import { useForm, useFieldArray } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { saveAs } from 'file-saver';

const CreateResume = () => {
  const [loading, setLoading] = useState(false);

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      education: [{ school: '', year: '', qualification: '', grade: '' }],
    }
  });

  // Education Fields (useFieldArray)
  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: 'education',
  });

  // Experience Fields (useFieldArray)
  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experiences',
  });

  // Project Fields (useFieldArray)
  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects',
  });

  const formSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/generatepdf`, data, {
        responseType: 'blob', // Expect the response as a Blob (binary data)
      });

      // Use FileSaver.js to trigger the download
      saveAs(response.data, 'Resume.pdf');
      toast.success('Resume Crafted Successfully');
    } catch (error) {
      console.log(error.message);
      toast.error('Failed to generate resume');
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" bg-gray-800 text-white rounded-lg sm:p-8 my-5 sm:mx-5 mx-3 p-3 sm:py-8 py-5">
          <form onSubmit={handleSubmit(formSubmit)}>

            {/* Personal Details */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4">Personal Details</p>
              {/* name */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
                )}
              </div>

              {/* email */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                )}
              </div>

              {/* phone */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="phone" className="text-sm font-medium">
                  Contact number <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Enter your contact no."
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>
                )}
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="linkedin" className="text-sm font-medium">
                  LinkedIn Url <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Enter your linkedin url"
                  {...register('linkedin', { required: 'LinkedIn URL is required' })}
                />
                {errors.linkedin && (
                  <span className="text-red-500 text-xs mt-1">{errors.linkedin.message}</span>
                )}
              </div>

              {/* Github */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="github" className="text-sm font-medium">
                  Github Url <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="github"
                  name="github"
                  placeholder="Enter your Github url"
                  {...register('github', { required: 'Github URL is required' })}
                />
                {errors.github && (
                  <span className="text-red-500 text-xs mt-1">{errors.github.message}</span>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="skills" className="text-sm font-medium">
                  Skills <sup className="text-pink-200">*</sup>
                </label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="skills"
                  name="skills"
                  placeholder="Enter your Skills separated by commas"
                  {...register('skills', { required: 'Skills are required' })}
                />
                {errors.skills && (
                  <span className="text-red-500 text-xs mt-1">{errors.skills.message}</span>
                )}
              </div>
            </div>

            {/* Education Details */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4">Education Details</p>
              {educationFields.map((edu, index) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`edu_school_${index}`} className="text-sm font-medium">
                      School/University <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`edu_school_${index}`}
                      name={`education[${index}].school`}
                      placeholder="Enter your School/University name"
                      {...register(`education[${index}].school`, { required: 'School/University name is required' })}
                    />
                    {errors?.education?.[index]?.school && (
                      <span className="text-red-500 text-xs mt-1">{errors?.education?.[index]?.school.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`edu_year_${index}`} className="text-sm font-medium">
                      Passing Year <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`edu_year_${index}`}
                      name={`education[${index}].year`}
                      placeholder="YYYY"
                      {...register(`education[${index}].year`, { required: 'Passing year is required' })}
                    />
                    {errors?.education?.[index]?.year && (
                      <span className="text-red-500 text-xs mt-1">{errors?.education?.[index]?.year.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`edu_qualification_${index}`} className="text-sm font-medium">
                      Degree <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`edu_qualification_${index}`}
                      name={`education[${index}].qualification`}
                      placeholder="Enter your degree"
                      {...register(`education[${index}].qualification`, { required: 'Degree is required' })}
                    />
                    {errors?.education?.[index]?.qualification && (
                      <span className="text-red-500 text-xs mt-1">{errors?.education?.[index]?.qualification.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`edu_grade_${index}`} className="text-sm font-medium">
                      Grade/CGPA <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`edu_grade_${index}`}
                      name={`education[${index}].grade`}
                      placeholder="Enter your grade/cgpa"
                      {...register(`education[${index}].grade`, { required: 'Grade is required' })}
                    />
                    {errors?.education?.[index]?.grade && (
                      <span className="text-red-500 text-xs mt-1">{errors?.education?.[index]?.grade.message}</span>
                    )}
                  </div>

                  {/* Remove Education */}
                  {educationFields.length > 1 && index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="text-red-500 mb-2"
                    >
                      Remove Education
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendEducation({ school: '', year: '', qualification: '', grade: '' })}
                className="text-blue-200"
              >
                Add Education
              </button>
            </div>

            {/* Experience Details */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4">Experience Details</p>
              {experienceFields.map((exp, index) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`exp_org_${index}`} className="text-sm font-medium">
                      Organization <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`exp_org_${index}`}
                      name={`experiences[${index}].org`}
                      placeholder="Enter Organization name"
                      {...register(`experiences[${index}].org`, { required: 'Organization name is required' })}
                    />
                    {errors?.experiences?.[index]?.org && (
                      <span className="text-red-500 text-xs mt-1">{errors?.experiences?.[index]?.org.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`exp_position_${index}`} className="text-sm font-medium">
                      Position <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`exp_position_${index}`}
                      name={`experiences[${index}].position`}
                      placeholder="Enter Position"
                      {...register(`experiences[${index}].position`, { required: 'Position is required' })}
                    />
                    {errors?.experiences?.[index]?.position && (
                      <span className="text-red-500 text-xs mt-1">{errors?.experiences?.[index]?.position.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`exp_description_${index}`} className="text-sm font-medium">
                      Description <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`exp_description_${index}`}
                      name={`experiences[${index}].description`}
                      placeholder="Enter Description"
                      {...register(`experiences[${index}].description`, { required: 'Description is required' })}
                    />
                    {errors?.experiences?.[index]?.description && (
                      <span className="text-red-500 text-xs mt-1">{errors?.experiences?.[index]?.description.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`exp_duration_${index}`} className="text-sm font-medium">
                      Duration <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`exp_duration_${index}`}
                      name={`experiences[${index}].duration`}
                      placeholder="Enter Duration"
                      {...register(`experiences[${index}].duration`, { required: 'Duration is required' })}
                    />
                    {errors?.experiences?.[index]?.duration && (
                      <span className="text-red-500 text-xs mt-1">{errors?.experiences?.[index]?.duration.message}</span>
                    )}
                  </div>

                  {/* Remove Experience */}
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="text-red-500 mb-2"
                  >
                    Remove Experience
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendExperience({ org: '', position: '', description: '', duration: '' })}
                className="text-blue-200"
              >
                Add Experience
              </button>
            </div>

            {/* Project Details */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4">Project Details</p>
              {projectFields.map((project, index) => (
                <div key={project.id} className="mb-4">
                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`project_title_${index}`} className="text-sm font-medium">
                      Project Title <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`project_title_${index}`}
                      name={`projects[${index}].title`}
                      placeholder="Enter Project Title"
                      {...register(`projects[${index}].title`, { required: 'Project title is required' })}
                    />
                    {errors?.projects?.[index]?.title && (
                      <span className="text-red-500 text-xs mt-1">{errors?.projects?.[index]?.title.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`project_link_${index}`} className="text-sm font-medium">
                      Project Link <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`project_link_${index}`}
                      name={`projects[${index}].link`}
                      placeholder="Enter Project Link"
                      {...register(`projects[${index}].link`, { required: 'Project link is required' })}
                    />
                    {errors?.projects?.[index]?.link && (
                      <span className="text-red-500 text-xs mt-1">{errors?.projects?.[index]?.link.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={`project_description_${index}`} className="text-sm font-medium">
                      Project Description <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                      id={`project_description_${index}`}
                      name={`projects[${index}].description`}
                      placeholder="Enter Project Description"
                      {...register(`projects[${index}].description`, { required: 'Project description is required' })}
                    />
                    {errors?.projects?.[index]?.description && (
                      <span className="text-red-500 text-xs mt-1">{errors?.projects?.[index]?.description.message}</span>
                    )}
                  </div>

                  {/* Remove Project */}
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="text-red-500 mb-2"
                  >
                    Remove Project
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendProject({ title: '', link: '', description: '' })}
                className="text-blue-200"
              >
                Add Project
              </button>
            </div>

            {/* Additional Information */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4">Additional Information</p>

              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="extra_1" className="text-sm font-medium">Achievements</label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="extra_1"
                  name="extra_1"
                  placeholder="Enter your achievements"
                  {...register('extra_1')}
                />
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="extra_2" className="text-sm font-medium">Hobbies</label>
                <input
                  className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  id="extra_2"
                  name="extra_2"
                  placeholder="Enter your hobbies"
                  {...register('extra_2')}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className=" bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors mt-8">
              Download Resume
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateResume;
