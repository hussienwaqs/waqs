import { Outlet, Link } from 'react-router-dom';
import { Music, Shield, FileText } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                MP4 إلى MP3
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                الرئيسية
              </Link>
              <Link to="/privacy" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                <Shield className="w-4 h-4" />
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                <FileText className="w-4 h-4" />
                شروط الاستخدام
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-4">
              <Link to="/privacy" className="text-gray-500 hover:text-indigo-600">
                <Shield className="w-5 h-5" />
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-indigo-600">
                <FileText className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-700">MP4 إلى MP3</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-indigo-600 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="hover:text-indigo-600 transition-colors">
                شروط الاستخدام
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}