export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="w-full max-w-sm">
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
            Login
            </button>
        </form>
        </div>
    );
}