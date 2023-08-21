import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'


export default function AddAdmin() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('address', data.address);
        // console.log(formData);
        try {
            const response = await axios.post("http://localhost:3001/admin/addAdmin",);
            setSuccess('Admin added successfully');
            reset();
        }
        catch (error) {
            // console.log(error.response.data.message);
            setSuccess('Admin add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
        <>
          
            <div class="pt-9 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="pt-10 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Add Admin User </h1>
                            <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
                                <span class="font-medium"> {success} </span>
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Username </label>
                                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""
                                {...register('username', { required: true })}/>
                                {errors.username &&
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Username is required</span></p>
                                }
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}/>
                                    {errors.email && (
                                    <p>
                                        {errors.email.type === 'required'
                                            ?
                                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                    <span class="font-medium">Email is required</span>
                                                </p>
                                            :
                                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                    <span class="font-medium">Invalid email address</span>
                                                </p>
                                            }
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, minLength: 5 })}
                                        /> {errors.password && (
                                    <p>
                                        {errors.password.type === 'required'
                                        ?
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                            <span class="font-medium">password is required</span>
                                        </p>
                                        :
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                            <span class="font-medium">Invalid password pattern</span>
                                        </p>
                                        }
                                    </p>
                                    )}
                                </div>
                                <div>    
                                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
                                    <textarea id="address"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Adress here...." {...register('address', { required: true })} />
                                </div>
                                <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      
        </>
    );
}