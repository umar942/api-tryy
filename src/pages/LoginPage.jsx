import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
