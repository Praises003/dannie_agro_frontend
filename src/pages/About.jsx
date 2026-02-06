import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#212121]">
      {/* Navigation */}
      <header className="py-4 shadow bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>Dannie Agro</h1>
          <nav className="space-x-6 font-medium">
            <a href="/" className="hover:text-[#2E7D32]">Home</a>
            <a href="/about" className="hover:text-[#2E7D32] font-semibold">About</a>
            <a href="/contact" className="hover:text-[#2E7D32]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #2E7D321A, #FF98001A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FF9800] text-white text-sm font-medium mb-4">
            About Dannie Agricultural Products
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Transforming Agriculture in <span style={{ color: '#2E7D32' }}>Nigeria</span>
          </h2>
          <p className="text-lg text-[#4B4B4B] max-w-2xl mx-auto">
            We are committed to revolutionizing the agricultural sector through quality products, innovative farming techniques, and sustainable business opportunities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="mb-4 text-[#4B4B4B]">
              Founded with a vision to transform Nigeria's agricultural landscape, Dannie Agricultural Products Nigeria Limited has grown from a small farming initiative to a comprehensive agricultural ecosystem.
            </p>
            <p className="mb-4 text-[#4B4B4B]">
              Our journey began with a simple belief: that agriculture should not only feed the nation but also provide sustainable livelihoods for our people. Today, we combine traditional farming wisdom with modern technology and innovative business models to create opportunities for farmers, distributors, and consumers alike.
            </p>
            <p className="text-[#4B4B4B]">
              Through our unique "BUY, EAT AND MAKE MONEY" approach, we've created a platform where quality agricultural products meet profitable business opportunities, benefiting everyone in our network.
            </p>
          </div>
          <div>
            <img
              src="/nigerian-farmers-working-in-green-agricultural-fie.jpg"
              alt="Nigerian farmers"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Our Foundation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                emoji: '🎯',
                text: 'To provide high-quality agricultural products while creating sustainable income opportunities for Nigerians through innovative farming practices and a rewarding network marketing system.',
              },
              {
                title: 'Our Vision',
                emoji: '👁️',
                text: "To become Nigeria's leading agricultural platform, transforming lives through quality products and empowering communities with sustainable business opportunities.",
              },
              {
                title: 'Our Values',
                emoji: '❤️',
                text: [
                  '• Quality & Excellence',
                  '• Integrity & Transparency',
                  '• Community Empowerment',
                  '• Sustainable Growth',
                  '• Innovation & Progress',
                ],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-left">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E7D321A] flex items-center justify-center mx-auto text-2xl">
                    {item.emoji}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">{item.title}</h4>
                {Array.isArray(item.text) ? (
                  <ul className="text-gray-700 space-y-1">
                    {item.text.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-10">Our Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '👥', value: '10,000+', label: 'Active Members' },
              { icon: '🌍', value: '36', label: 'States Covered' },
              { icon: '🏆', value: '500+', label: 'Quality Products' },
              { icon: '💰', value: '₦2B+', label: 'Commissions Paid' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-[#2E7D321A] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold">{stat.value}</h4>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Daniel Adebayo',
                role: 'Founder & CEO',
                img: '/professional-nigerian-businessman-in-suit.jpg',
                bio: 'Agricultural engineer with 15+ years experience in sustainable farming and agribusiness development.',
              },
              {
                name: 'Fatima Ibrahim',
                role: 'Chief Operations Officer',
                img: '/professional-nigerian-businesswoman.jpg',
                bio: 'Expert in supply chain management and agricultural logistics with a passion for community development.',
              },
              {
                name: 'Chinedu Okafor',
                role: 'Head of Network Development',
                img: '/professional-nigerian-business-executive.jpg',
                bio: 'Network marketing specialist focused on building sustainable income opportunities for our members.',
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-xl font-bold">{leader.name}</h4>
                <p className="text-[#2E7D32] font-medium mb-2">{leader.role}</p>
                <p className="text-gray-700 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} Dannie Agricultural Products Nigeria Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
