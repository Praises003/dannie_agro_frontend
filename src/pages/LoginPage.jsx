import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    if(error) {
        toast.error(error)
    }

    if(user) {
        navigate("/dashboard")
    }

  }, [dispatch, navigate, user, error])

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
    
  };
  if (loading) {
    return <Spinner />
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-secondary font-medium hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
