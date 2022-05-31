import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const result = await supabase.auth.signIn({ email, password });
      console.log(result);
      const { error } = result;
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="w-full text-center">
          <h1>Marketplace</h1>
        </div>
        <div className="shadow-lg p-4 mt-4">
          <div>
            <input
              className="block bg-gray-100 p-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block bg-gray-100 p-2 mt-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-2 flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
              className="py-2 px-4 bg-blue-500 block text-white rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              <span>{loading ? "Loading" : "Log in"}</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleRegister(email, password);
              }}
              className="py-2 px-4 bg-blue-500 block ml-2 hover:bg-blue-600 text-white rounded-lg"
              disabled={loading}
            >
              <span>{loading ? "Loading" : "Register"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
