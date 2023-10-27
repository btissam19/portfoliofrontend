import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterForm = () => {

    const [users,setUsers]=useState({})
     const handelSubmit=async (e)=>{

        e.preventDefault();
        try {
            const res= await fetch('http://localhost:5000/users/register',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users)}
            
            )
            const data= await res.json();
            console.log(data)
            
        } catch (error) {
            console.error("Error sending data:", error);
        }
     
    
    }
    const handelInput =  (e)=>{
        const { name, value } = e.target;
        setUsers(prevState => ({ ...prevState, [name]: value }));
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
                <form onSubmit={handelSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600"></label>
                        <input type="text" placeholder="name.lastname@domain" id="username" name="email" value={users.email}  onChange ={handelInput} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" value={users.password}  onChange ={handelInput} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" required />
                    </div>
                    <div className="w-32 bg-gradient-to-r from-red-400 to-red-200 text-white text-center py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 mt-4 mb-6">
                        <input type="submit" value="Submit" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }} />
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm">do you have an account? <Link to="/login" className="text-red-300">back for login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
