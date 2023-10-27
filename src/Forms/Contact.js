import { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" id="contact">
            <form className="w-full max-w-lg space-x-3" onSubmit={handleSubmit} >
                <div className="w-full max-w-2xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                        Work with me!
                    </div>
                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="contact-form-name"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Name"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative">
                                <input
                                    type="email"
                                    id="contact-form-email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-700" htmlFor="comment">
                                <textarea
                                    name="comment"
                                    value={contact.comment}
                                    onChange={handleChange}
                                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    id="comment"
                                    placeholder="Enter your comment"
                                    rows="5"
                                    cols="40"
                                />
                            </label>
                        </div>
                        <div className="flex justify-center align-center gap-2">
                            <button
                                type="submit"
                                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                            >
                                Send
                            </button>
                            <button
                                type="button"
                                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
