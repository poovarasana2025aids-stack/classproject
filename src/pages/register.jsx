import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { registerschema } from "../components/formschema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register succes")
        navigate("/",{
            state:data
        })
    }
    return (
        <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4"   >
        <div className="w-full max-w-md bg-white rounded-xl shadow-md border boder-gray-100 p-8">
            <div className="text-center md-6">
                <h2 className="text-2xl font-bold text-gray-900">Register</h2>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit1)} className="space-y-4">
            <div> </div>
            <label className="block text -sm font-medium text-gray-700 mb-1"  >Name </label>
            <input placeholder="Enter your name" type="text" {...register("name")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <p>{errors.name?.message}</p>

            <label className="block text-sm font-medium text-gray-700 mb-1">Email </label>
            <input placeholder="Enter your name" type="email" {...register("email")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <p>{errors.email?.message}</p>

            <label className="block text-sm font-medium text-gray-700 mb-1" >Password </label>
            <input placeholder="Enter Password"  type="password" {...register("password")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <p>{errors.password?.message}</p>

            <label className="block text-sm font-medium text-gray-700 mb-1">Age </label>
            <input placeholder="Enter your age"  type="number" {...register("age")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <p>{errors.age?.message}</p>

            <button type="submit" className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer">Submit</button>
        </form>
        </div>
        </>
    );
}

export default Register;