import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const EducationForm = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      education: [{ edu1_school: "", edu1_year: "", edu1_qualification: "", edu1_grade: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Add More button handler
  const addMore = () => {
    append({ edu1_school: "", edu1_year: "", edu1_qualification: "", edu1_grade: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4">
          <div className='flex flex-col gap-2'>
            <label htmlFor={`education[${index}].edu1_school`}>
              School/University<sup className="text-pink-200">*</sup>
            </label>
            <input
              className='text-black'
              id={`education[${index}].edu1_school`}
              name={`education[${index}].edu1_school`}
              placeholder='Enter your School/University name'
              {...register(`education[${index}].edu1_school`, { required: true })}
            />
            {errors.education?.[index]?.edu1_school && (
              <span className="-mt-1 text-[12px] text-red-500">
                Please enter your school/university name.
              </span>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor={`education[${index}].edu1_year`}>
              Passing Year<sup className="text-pink-200">*</sup>
            </label>
            <input
              className='text-black'
              id={`education[${index}].edu1_year`}
              name={`education[${index}].edu1_year`}
              placeholder='DD/MM/YYYY'
              {...register(`education[${index}].edu1_year`, { required: true })}
            />
            {errors.education?.[index]?.edu1_year && (
              <span className="-mt-1 text-[12px] text-red-500">
                Please enter your year of passout.
              </span>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor={`education[${index}].edu1_qualification`}>
              Degree<sup className="text-pink-200">*</sup>
            </label>
            <input
              className='text-black'
              id={`education[${index}].edu1_qualification`}
              name={`education[${index}].edu1_qualification`}
              placeholder='Enter your degree'
              {...register(`education[${index}].edu1_qualification`, { required: true })}
            />
            {errors.education?.[index]?.edu1_qualification && (
              <span className="-mt-1 text-[12px] text-red-500">
                Please enter your degree.
              </span>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor={`education[${index}].edu1_grade`}>
              Grade/CGPA<sup className="text-pink-200">*</sup>
            </label>
            <input
              className='text-black'
              id={`education[${index}].edu1_grade`}
              name={`education[${index}].edu1_grade`}
              placeholder='Enter your percentage/cgpa'
              {...register(`education[${index}].edu1_grade`, { required: true })}
            />
            {errors.education?.[index]?.edu1_grade && (
              <span className="-mt-1 text-[12px] text-red-500">
                Please enter your grade.
              </span>
            )}
          </div>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => remove(index)}  // This will remove the field at the given index
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addMore}
        className="text-blue-500 hover:underline"
      >
        Add More
      </button>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default EducationForm;
