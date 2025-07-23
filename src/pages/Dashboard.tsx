import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Moon, Star, Clock, Calendar, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-spiritual-gradient">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-earth-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Moon className="w-8 h-8 text-earth-300" />
              <h1 className="text-2xl font-bold text-earth-100">Muslim Prayer Tracker</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-earth-600/20 hover:bg-earth-600/30 text-earth-100 px-4 py-2 rounded-lg transition-all duration-200 border border-earth-500/30"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border border-earth-200/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-earth-gradient rounded-full flex items-center justify-center">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-earth-800 mb-2">
              Assalamu Alaikum, {user?.name}!
            </h2>
            <p className="text-earth-600 text-lg">
              Welcome to your spiritual journey dashboard
            </p>
            <div className="mt-4 p-4 bg-earth-50 rounded-lg">
              <p className="text-earth-700 font-arabic text-lg italic">
                "And establish prayer at the two ends of the day and at the approach of the night."
              </p>
              <p className="text-earth-500 text-sm mt-2">- Quran 11:114</p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Prayer Times Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-earth-200/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-earth-600" />
              </div>
              <h3 className="text-xl font-semibold text-earth-800 ml-3">Prayer Times</h3>
            </div>
            <p className="text-earth-600 mb-4">Track your daily prayers and stay connected</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-earth-50 rounded">
                <span className="text-earth-700">Fajr</span>
                <span className="text-earth-600 text-sm">Coming Soon</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-earth-50 rounded">
                <span className="text-earth-700">Dhuhr</span>
                <span className="text-earth-600 text-sm">Coming Soon</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-earth-50 rounded">
                <span className="text-earth-700">Asr</span>
                <span className="text-earth-600 text-sm">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Prayer Calendar Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-earth-200/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-earth-600" />
              </div>
              <h3 className="text-xl font-semibold text-earth-800 ml-3">Prayer Calendar</h3>
            </div>
            <p className="text-earth-600 mb-4">View your prayer history and streaks</p>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl font-bold">0</span>
              </div>
              <p className="text-earth-600">Days tracked</p>
              <p className="text-earth-500 text-sm mt-2">Feature coming soon</p>
            </div>
          </div>

          {/* Spiritual Reminders Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-earth-200/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-earth-600" />
              </div>
              <h3 className="text-xl font-semibold text-earth-800 ml-3">Spiritual Reminders</h3>
            </div>
            <p className="text-earth-600 mb-4">Daily verses and reminders</p>
            <div className="bg-earth-50 p-4 rounded-lg">
              <p className="text-earth-700 font-arabic text-center mb-2">
                "Remember Me, and I will remember you."
              </p>
              <p className="text-earth-500 text-sm text-center">- Quran 2:152</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-earth-200/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-earth-800 mb-4">Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-earth-50 rounded-lg">
                <h4 className="font-semibold text-earth-700 mb-2">Qibla Direction</h4>
                <p className="text-earth-600 text-sm">Find the direction of prayer</p>
              </div>
              <div className="p-4 bg-earth-50 rounded-lg">
                <h4 className="font-semibold text-earth-700 mb-2">Prayer Tracker</h4>
                <p className="text-earth-600 text-sm">Log your daily prayers</p>
              </div>
              <div className="p-4 bg-earth-50 rounded-lg">
                <h4 className="font-semibold text-earth-700 mb-2">Islamic Calendar</h4>
                <p className="text-earth-600 text-sm">Important Islamic dates</p>
              </div>
              <div className="p-4 bg-earth-50 rounded-lg">
                <h4 className="font-semibold text-earth-700 mb-2">Dhikr Counter</h4>
                <p className="text-earth-600 text-sm">Digital tasbih counter</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;