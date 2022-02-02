import { useForm } from "react-hook-form";
import axios from 'axios';
import { saveAs } from 'file-saver';

const Syllabus = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const formdata = new FormData()
    formdata.append('filepath',data.file[0])
      axios.post('http://127.0.0.1:8000/syllabus', formdata,{
          headers:{
              'Content-type':'multipart/form-data'
          }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='flex-col'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('file', { required: true })} type="file" />
        <input type="text" {...register('course', { required: true })} id="" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Syllabus;
