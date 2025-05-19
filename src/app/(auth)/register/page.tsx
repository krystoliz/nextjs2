export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="w-full max-w-sm">
            <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 w-full"
            >
            Register
            </button>
        </form>
        </div>
    );
}