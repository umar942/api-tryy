import { useState } from "react";
import { useLogin } from "../hooks/useAuth";

function LoginForm() {
  const { mutate: login, isPending, isError, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="border px-4 py-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border px-4 py-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2"
        disabled={isPending}
      >
        {isPending ? "Logging in..." : "Login"}
      </button>

      {isError && <p className="text-red-600">{error.message}</p>}
    </form>
  );
}

export default LoginForm;
