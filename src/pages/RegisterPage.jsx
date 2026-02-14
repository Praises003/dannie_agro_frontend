import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { saveReferral, getReferral } from "../utils/referralManager";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { loading, user, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    referralCode: '',
  });

  /* ===============================
     HANDLE REFERRAL FROM URL
  =============================== */
  useEffect(() => {
    const refFromURL = searchParams.get("ref");

    if (refFromURL) {
      const upperRef = refFromURL.toUpperCase();
      saveReferral(upperRef);

      setFormData((prev) => ({
        ...prev,
        referralCode: upperRef,
      }));
    } else {
      const savedRef = getReferral();
      if (savedRef) {
        setFormData((prev) => ({
          ...prev,
          referralCode: savedRef.toUpperCase(),
        }));
      }
    }
  }, [searchParams]);

  /* ===============================
     HANDLE SUCCESS / ERROR
  =============================== */
  useEffect(() => {
    if (error) {
      toast.error(error?.error || "Registration failed");
    }

    if (user) {
      localStorage.removeItem("referral_data");
      navigate("/dashboard");
    }
  }, [user, error, navigate]);

  /* ===============================
     INPUT CHANGE HANDLER
  =============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "referralCode"
        ? value.toUpperCase()
        : value,
    }));
  };

  /* ===============================
     FORM SUBMIT
  =============================== */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.referralCode) {
      toast.error("Referral code is required");
      return;
    }

    dispatch(registerUser(formData));
  };

  if (loading) return <Spinner />;

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

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

          <input
            name="referralCode"
            type="text"
            placeholder="Referral Code"
            value={formData.referralCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-secondary font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
