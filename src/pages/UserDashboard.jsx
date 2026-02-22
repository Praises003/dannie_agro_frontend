import React, { useEffect, useState } from "react";
import api from "../utils/api";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaCopy,
  FaShoppingCart,
  FaWallet,
  FaEdit,
} from "react-icons/fa";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    points: 0,
    earnings: 0,
    rank: "Starter",
    referralCode: "N/A",
  });

  const [orders, setOrders] = useState([]);
  const [commissions, setCommissions] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [openReferral, setOpenReferral] = useState(null);

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const referralLink =
    user.referralCode && user.referralCode !== "N/A"
      ? `${window.location.origin}/register?ref=${user.referralCode}`
      : "";

  // 🔢 Calculate total network (Level 1 + Level 2)
  const totalNetworkReferrals = referrals.reduce((total, r) => {
    return total + 1 + (r.referrals?.length || 0);
  }, 0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userRes = await api.get("api/users/profile");

        setUser({
          name: userRes.data?.name || "",
          points: userRes.data?.points ?? 0,
          earnings: userRes.data?.earnings ?? 0,
          rank: userRes.data?.rank || "Starter",
          referralCode: userRes.data?.referralCode || "N/A",
        });

        try {
          const ordersRes = await api.get("api/v1/orders/me");
          setOrders(Array.isArray(ordersRes.data) ? ordersRes.data : []);
        } catch {
          setOrders([]);
        }

        try {
          const commissionsRes = await api.get("api/v1/commissions/me");
          setCommissions(
            Array.isArray(commissionsRes.data) ? commissionsRes.data : []
          );
        } catch {
          setCommissions([]);
        }

        // ✅ Updated endpoint
        try {
          const referralsRes = await api.get(
            "api/users/me/referrals/tree"
          );
          
          setReferrals(
            Array.isArray(referralsRes.data)
              ? referralsRes.data
              : []
          );
        } catch {
          setReferrals([]);
        }
      } catch (err) {
        console.error("Critical dashboard error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleCopy = () => {
    if (!referralLink) return;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-semibold">
          Unable to load dashboard. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          Dannie Agricultural Products
        </div>

        <div className="relative group">
          <FaUserCircle size={30} className="cursor-pointer text-secondary" />
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
            <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
              My Profile
            </a>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Welcome */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">
          Welcome back, {user.name || "User"}!
        </h1>
        <p className="text-gray-600 mt-1">{today}</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 my-6">
        {[
          { label: "Current Points", value: user.points },
          {
            label: "Total Earnings",
            value: `₦${user.earnings.toLocaleString()}`,
          },
          { label: "Total Network", value: totalNetworkReferrals },
          { label: "Rank", value: user.rank },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-gray-600">{stat.label}</h3>
            <p className="text-xl font-bold text-primary mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Referral Section */}
      <div className="px-4 my-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">
            Your Referral Code
          </h2>

          <div className="flex justify-between bg-gray-100 p-3 rounded">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-transparent font-mono outline-none"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              <FaCopy />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <h3 className="mt-6 font-semibold">
            Your Network
          </h3>

          {referrals.length === 0 ? (
            <p className="text-gray-500 mt-3">
              No referrals yet. Share your code to grow your network.
            </p>
          ) : (
            <ul className="mt-3 space-y-3">
              {referrals.map((r) => (
                <li
                  key={r.id}
                  className="border rounded-lg p-4 bg-gray-50"
                >
                  {/* Level 1 */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setOpenReferral(
                        openReferral === r.id ? null : r.id
                      )
                    }
                  >
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-sm text-gray-500">
                        {r.email}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-primary font-bold">
                        {r.points ?? 0} pts
                      </p>
                      <p className="text-xs text-gray-500">
                        {r.referrals?.length || 0} sub-referrals
                      </p>
                    </div>
                  </div>

                  {/* Level 2 */}
                  {openReferral === r.id &&
                    r.referrals?.length > 0 && (
                      <div className="mt-3 pl-4 border-l-2 border-primary space-y-2 transition-all duration-300">
                        {r.referrals.map((sub) => (
                          <div
                            key={sub.id}
                            className="bg-white p-3 rounded flex justify-between"
                          >
                            <div>
                              <p className="font-medium">
                                {sub.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {sub.email}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;