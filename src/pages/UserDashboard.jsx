import React, { useEffect, useState } from "react"
import axios from "axios"
import {
  FaUserCircle,
  FaSignOutAlt,
  FaCopy,
  FaShoppingCart,
  FaWallet,
  FaEdit,
} from "react-icons/fa"

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    points: 0,
    earnings: 0,
    rank: "Starter",
    referralCode: "N/A",
  })

  const [orders, setOrders] = useState([])
  const [commissions, setCommissions] = useState([])
  const [referrals, setReferrals] = useState([])

  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  // 🔗 Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [
          userRes,
          ordersRes,
          commissionsRes,
          referralsRes,
        ] = await Promise.all([
          axios.get("/api/v1/users/me"),
          axios.get("/api/v1/orders/me"),
          axios.get("/api/v1/commissions/me"),
          axios.get("/api/v1/users/me/referrals"),
        ])

        setUser({
          name: userRes.data?.name || "",
          points: userRes.data?.points ?? 0,
          earnings: userRes.data?.earnings ?? 0,
          rank: userRes.data?.rank || "Starter",
          referralCode: userRes.data?.referralCode || "N/A",
        })

        setOrders(Array.isArray(ordersRes.data) ? ordersRes.data : [])
        setCommissions(
          Array.isArray(commissionsRes.data) ? commissionsRes.data : []
        )
        setReferrals(
          Array.isArray(referralsRes.data) ? referralsRes.data : []
        )
      } catch (err) {
        console.error("Dashboard load error:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const handleCopy = () => {
    if (!user.referralCode || user.referralCode === "N/A") return
    navigator.clipboard.writeText(user.referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading dashboard...
        </p>
      </div>
    )
  }

  // ❌ Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-semibold">
          Unable to load dashboard. Please try again later.
        </p>
      </div>
    )
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
            <a href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Settings
            </a>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-red-500">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Welcome */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-dark">
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
          { label: "Referral Count", value: referrals.length },
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
          <h2 className="text-xl font-bold mb-4">Your Referral Code</h2>

          <div className="flex justify-between bg-gray-100 p-3 rounded">
            <span className="font-mono">{user.referralCode}</span>
            <button onClick={handleCopy} className="flex items-center gap-2">
              <FaCopy />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <h3 className="mt-6 font-semibold">Direct Referrals</h3>

          {referrals.length === 0 ? (
            <p className="text-gray-500 mt-3">
              No referrals yet. Share your referral code to start earning.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {referrals.map((r) => (
                <li
                  key={r.id}
                  className="border p-3 rounded flex justify-between"
                >
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.email}</p>
                  </div>
                  <span className="text-primary font-bold">
                    {(r.points ?? 0)} pts
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Orders */}
      <div className="px-4 my-6 bg-white p-6 rounded shadow overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th>Order ID</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No orders yet. Start shopping to see your orders here.
                </td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o.id} className="border-b">
                  <td>{o.id}</td>
                  <td>₦{(o.totalAmount ?? 0).toLocaleString()}</td>
                  <td>{o.status}</td>
                  <td>
                    {new Date(o.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Commissions */}
      <div className="px-4 my-6 bg-white p-6 rounded shadow overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Commission History</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th>From</th>
              <th>Level</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {commissions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No commissions yet. Invite others to start earning.
                </td>
              </tr>
            ) : (
              commissions.map((c) => (
                <tr key={c.id} className="border-b">
                  <td>{c.sourceUser?.name || "N/A"}</td>
                  <td>{c.level}</td>
                  <td>₦{(c.amount ?? 0).toLocaleString()}</td>
                  <td>{c.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-10">
        <a href="/products" className="bg-primary text-white p-6 rounded shadow flex gap-3">
          <FaShoppingCart /> Shop Products
        </a>
        <a href="/withdraw" className="bg-secondary p-6 rounded shadow flex gap-3">
          <FaWallet /> Withdraw Earnings
        </a>
        <a href="/profile" className="bg-white p-6 rounded shadow flex gap-3">
          <FaEdit /> Update Profile
        </a>
      </div>
    </div>
  )
}

export default UserDashboard
