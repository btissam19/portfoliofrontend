import { useState } from "react";
const LoginForm = () => {

    const [users,setUsers]=useState({})
     const handelSubmit=async (e)=>{

        e.preventDefault();
        try {
            const res= await fetch('http://localhost:5000/users/login',{
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
                <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Login</h1>
                <form onSubmit={handelSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600"></label>
                        <input type="text" placeholder="name.lastname@domain" id="username" name="email" value={users.email}  onChange ={handelInput} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" value={users.password}  onChange ={handelInput} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>
                    <div className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-center py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">
                        <input type="submit" value="Submit" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }} />
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm">do you have an account? <a href="/" className="text-cyan-600">back for register</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm ;
