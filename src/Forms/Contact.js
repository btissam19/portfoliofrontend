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
        <div className="flex flex-col items-center justify-center  bg-red-50" id="contact">
        <h1 className="text-3xl font-bold text-black text-center mb-8">
            Contact Form && Download Resume
        </h1>
        <form className="w-full max-w-lg space-x-3" onSubmit={handleSubmit}>
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
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent"
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
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent"
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
                                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent"
                                    id="comment"
                                    placeholder="Enter your comment"
                                    rows="5"
                                    cols="40"
                                />
                            </label>
                        </div>
                        <div className="flex justify-center gap-2 ">
                            <button type="button"className="px-4 py-2 text-sm m-2 w-1/3 text-gray-900 bg-transparent border-2 border-gray-800 dark:bg-white hover:bg-red-200 dark:text-white text-md">send </button>
                            <button  id ="resume" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download </span>
                         </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
