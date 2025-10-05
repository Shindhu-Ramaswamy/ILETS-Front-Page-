import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

export default function IELTSHomePage() {
  const features = [
    {
      title: 'Speaking Practice Sessions',
      desc: 'Enhance fluency and pronunciation with guided speaking sessions from certified trainers.'
    },
    {
      title: 'AI-Based Band Score Prediction',
      desc: 'Get instant band score predictions powered by our advanced AI models.'
    },
    {
      title: 'Full-Length Mock Tests',
      desc: 'Simulate real IELTS exams with timed mock tests for all four modules.'
    },
    {
      title: 'Personalized Study Plans',
      desc: 'Custom study schedules based on your strengths and weaknesses.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      review: 'I improved my band score from 6.0 to 8.0 thanks to their structured guidance!',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      review: 'The mock tests felt just like the real exam. Highly recommend this institute!',
      rating: 4
    },
    {
      name: 'Sneha Rao',
      review: 'AI feedback really helped me identify my weak areas quickly.',
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">IELTS Achievers</h1>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Join Now</Button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Score Your Dream Band in IELTS
          </h2>
          <p className="text-lg text-gray-600">
            Learn from expert mentors, take realistic mock tests, and track progress using AI tools.
          </p>
          <Button className="bg-blue-600 text-white text-lg px-6 py-2 hover:bg-blue-700">Get Started</Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1584697964403-271c5cf66e10?auto=format&fit=crop&w=800&q=80"
          alt="IELTS students"
          className="md:w-1/2 mt-8 md:mt-0 rounded-xl shadow-lg"
        />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="p-6 text-center border-blue-100 hover:shadow-lg transition">
              <CardContent>
                <h4 className="text-xl font-semibold mb-3 text-blue-700">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">What Our Students Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 bg-white shadow-md hover:shadow-lg transition">
              <CardContent>
                <p className="text-gray-700 italic mb-4">“{t.review}”</p>
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-blue-700">{t.name}</h5>
                  <div className="flex text-yellow-500">
                    {[...Array(t.rating)].map((_, i) => (<Star key={i} size={16} fill="gold" />))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">IELTS Achievers</h4>
            <p>Empowering students to achieve their dream IELTS scores through innovative learning.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
            <p>Email: info@ieltsachievers.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Chennai, India</p>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-500">© 2025 IELTS Achievers. All rights reserved.</p>
      </footer>
    </div>
  );
}