import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaCopy, FaShoppingCart, FaWallet, FaEdit } from 'react-icons/fa';

const mockUser = {
  name: 'Adebayo Johnson',
  referralCode: 'DANNIE12345',
  points: 240,
  earnings: 150000,
  referrals: 12,
  rank: 'Silver',
  orders: [
    { id: 'ORD001', products: 'Premium Rice, Poultry Feed', total: 23000, status: 'Delivered', date: '2025-09-29' },
    { id: 'ORD002', products: 'Organic Beans', total: 12500, status: 'Pending', date: '2025-09-25' },
  ],
  commissions: [
    { source: 'Chioma Eze', level: 1, amount: 500, status: 'Paid', date: '2025-09-30' },
    { source: 'Oluwaseun Adeleke', level: 2, amount: 250, status: 'Pending', date: '2025-09-28' },
  ],
  directReferrals: [
    { name: 'Chioma Eze', email: 'chioma@example.com', points: 120 },
    { name: 'Oluwaseun Adeleke', email: 'oluwa@example.com', points: 80 },
  ],
};

const UserDashboard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(mockUser.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Dannie Agro</div>
        <div className="relative group">
          <FaUserCircle size={30} className="text-secondary cursor-pointer" />
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
            <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">My Profile</a>
            <a href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Welcome */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-dark">Welcome back, {mockUser.name}!</h1>
        <p className="text-gray-600 mt-1">{today}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 my-6">
        {[
          { label: 'Current Points', value: mockUser.points },
          { label: 'Total Earnings', value: `₦${mockUser.earnings.toLocaleString()}` },
          { label: 'Referral Count', value: mockUser.referrals },
          { label: 'Rank', value: mockUser.rank },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <h3 className="text-lg text-gray-600">{stat.label}</h3>
            <p className="text-xl font-bold text-primary mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Referral Section */}
      <div className="px-4 my-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-dark mb-4">Your Referral Link</h2>
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
            <span className="text-sm text-gray-700 font-mono">{mockUser.referralCode}</span>
            <button
              onClick={handleCopy}
              className="text-secondary font-medium flex items-center gap-2 hover:text-primary"
            >
              <FaCopy />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Genealogy Preview */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Your Referrals</h3>
          <ul className="space-y-2">
            {mockUser.directReferrals.map((r, i) => (
              <li key={i} className="border p-3 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-bold text-dark">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.email}</p>
                </div>
                <p className="text-sm text-primary font-semibold">{r.points} pts</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Orders Section */}
      <div className="px-4 my-6">
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-dark">Recent Orders</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Products</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockUser.orders.map((order, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.products}</td>
                  <td className="py-2 px-4">₦{order.total.toLocaleString()}</td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4">
            <a href="/orders" className="text-secondary font-medium hover:underline">
              View all
            </a>
          </div>
        </div>
      </div>

      {/* Commission Section */}
      <div className="px-4 my-6">
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-dark">Commission History</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-4">Source</th>
                <th className="py-2 px-4">Level</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockUser.commissions.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 px-4">{c.source}</td>
                  <td className="py-2 px-4">{c.level}</td>
                  <td className="py-2 px-4">₦{c.amount}</td>
                  <td className="py-2 px-4">{c.status}</td>
                  <td className="py-2 px-4">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-10">
        <a href="/products" className="bg-primary text-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:bg-opacity-90 transition">
          <FaShoppingCart size={24} />
          <span className="font-semibold">Shop Products</span>
        </a>
        <a href="/withdraw" className="bg-secondary text-dark p-6 rounded-lg shadow-md flex items-center gap-4 hover:bg-opacity-90 transition">
          <FaWallet size={24} />
          <span className="font-semibold">Withdraw Earnings</span>
        </a>
        <a href="/profile" className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition">
          <FaEdit size={24} className="text-secondary" />
          <span className="font-semibold">Update Profile</span>
        </a>
      </div>
    </div>
  );
};

export default UserDashboard;
