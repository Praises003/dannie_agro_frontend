import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import api from "../utils/api";

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    dateOfBirth: "",
    phoneNumber: "",
    altPhoneNumber: "",
    address: "",
    nin: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    preferredCommunication: "SMS",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true); // Start the spinner
    try {
      await api.post("/api/users/onboarding", form);
      // If the request succeeds, we navigate away
      navigate("/dashboard");
    } catch (error) {
      // If the request fails, log the error or show a toast
      console.error("Onboarding failed:", error);
      // toast.error("Something went wrong. Please try again.");
    } finally {
      // This runs regardless of success or failure
      // It ensures the spinner stops so the user can try again
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Complete Your Profile</h2>

        <div className="grid grid-cols-2 gap-4">
          <input name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input type="date" name="dateOfBirth" onChange={handleChange} />
          <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
          <input name="altPhoneNumber" placeholder="Alt Phone Number" onChange={handleChange} />
          <input name="nin" placeholder="NIN" onChange={handleChange} />
          <input name="bankName" placeholder="Bank Name" onChange={handleChange} />
          <input name="accountNumber" placeholder="Account Number" onChange={handleChange} />
          <input name="accountName" placeholder="Account Name" onChange={handleChange} />

          <select name="preferredCommunication" onChange={handleChange}>
            <option>SMS</option>
            <option>Email</option>
            <option>WhatsApp</option>
          </select>

          <textarea
            name="address"
            placeholder="Home Address"
            onChange={handleChange}
            className="col-span-2"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-black text-white py-3 rounded-lg"
        >
          Complete Onboarding
        </button>
      </div>
    </div>
  );
}