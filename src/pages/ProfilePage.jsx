import { useEffect, useState } from "react";
import axios from "axios";
import api from "../utils/api";

export default function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get("/api/users/profile").then(res => {
      console.log(res.data)
      setUser(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-6">My Profile</h2>

        <div className="grid grid-cols-2 gap-6">

          <ProfileItem label="Full Name" value={user.fullName} />
          <ProfileItem label="Username" value={user.username} />
          <ProfileItem label="Email" value={user.email} />
          <ProfileItem label="Phone" value={user.phoneNumber} />
          <ProfileItem label="Alt Phone" value={user.altPhoneNumber} />
          <ProfileItem label="Date of Birth" value={user.dateOfBirth} />
          <ProfileItem label="Address" value={user.address} />
          <ProfileItem label="NIN" value={user.nin} />
          <ProfileItem label="Bank" value={user.bankName} />
          <ProfileItem label="Account Number" value={user.accountNumber} />
          <ProfileItem label="Account Name" value={user.accountName} />
          <ProfileItem label="Preferred Contact" value={user.preferredCommunication} />

        </div>
      </div>
    </div>
  );
}

const ProfileItem = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="font-semibold">{value || "-"}</p>
  </div>
);