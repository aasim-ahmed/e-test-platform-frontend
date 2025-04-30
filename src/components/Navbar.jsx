import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, UserCircle, Menu, X, Search, LogOut, Settings, BookOpen } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        if (isNotificationsOpen) setIsNotificationsOpen(false);
    };
    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        if (isUserMenuOpen) setIsUserMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-blue-400 to-blue-600'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <div className={`font-bold text-2xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                                SkillSnap
                            </div>
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className={`relative rounded-full bg-opacity-20 ${isScrolled ? 'bg-gray-100' : 'bg-white'} flex items-center px-3 py-1`}>
                            <Search className={`h-4 w-4 ${isScrolled ? 'text-gray-500' : 'text-white'}`} />
                            <input
                                type="text"
                                placeholder="Search tests..."
                                className={`bg-transparent border-none focus:ring-0 text-sm ml-2 w-64 outline-none transition-colors duration-300
    ${isScrolled ? 'text-gray-700 placeholder-black' : 'text-white placeholder-white'}`}
                            />

                        </div>

                        <Link to="/dashboard" className={`px-3 py-2 text-sm font-medium rounded-md ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-blue-500 hover:bg-opacity-20'}`}>
                            Dashboard
                        </Link>
                        <Link to="/my-tests" className={`px-3 py-2 text-sm font-medium rounded-md ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-blue-500 hover:bg-opacity-20'}`}>
                            My Tests
                        </Link>
                        <Link to="/practice" className={`px-3 py-2 text-sm font-medium rounded-md ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-blue-500 hover:bg-opacity-20'}`}>
                            Practice
                        </Link>
                        <Link to="/analytics" className={`px-3 py-2 text-sm font-medium rounded-md ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:bg-blue-500 hover:bg-opacity-20'}`}>
                            Analytics
                        </Link>

                        {/* Notification bell */}
                        <div className="relative">
                            <button
                                onClick={toggleNotifications}
                                className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'}`}
                            >
                                <Bell className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                            </button>

                            {/* Notifications dropdown */}
                            {isNotificationsOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-10">
                                    <div className="px-4 py-2 font-medium border-b border-gray-100">Notifications</div>
                                    <div className="max-h-96 overflow-y-auto">
                                        <Link to="/tests/advanced-mathematics" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                                            <p className="text-sm text-gray-700">New test "Advanced Mathematics" is available.</p>
                                            <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                                        </Link>
                                        <Link to="/results/biology-quiz" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                                            <p className="text-sm text-gray-700">Your test results for "Biology Quiz" are ready.</p>
                                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                                        </Link>
                                        <Link to="/assignments" className="block px-4 py-3 hover:bg-gray-50">
                                            <p className="text-sm text-gray-700">You have a new assignment due tomorrow.</p>
                                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                                        </Link>
                                    </div>
                                    <Link to="/notifications" className="block text-center text-sm text-blue-600 font-medium py-2 border-t border-gray-100">
                                        View all notifications
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* User menu */}
                        <div className="relative ml-3">
                            <button
                                onClick={toggleUserMenu}
                                className="flex items-center space-x-2"
                            >
                                <UserCircle className={`h-8 w-8 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                                <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>John Doe</span>
                            </button>

                            {/* User dropdown */}
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                        <UserCircle className="h-4 w-4 mr-2 text-gray-500" /> Profile
                                    </Link>
                                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                        <Settings className="h-4 w-4 mr-2 text-gray-500" /> Settings
                                    </Link>
                                    <Link to="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                        <BookOpen className="h-4 w-4 mr-2 text-gray-500" /> My Courses
                                    </Link>
                                    <div className="border-t border-gray-100"></div>
                                    <Link to="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center">
                                        <LogOut className="h-4 w-4 mr-2 text-red-500" /> Sign out
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="flex items-center px-3 py-2 rounded-md bg-gray-100">
                            <Search className="h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search tests..."
                                className="bg-transparent border-none outline-none focus:ring-0 text-sm ml-2 w-full"
                            />
                        </div>
                        <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Dashboard</Link>
                        <Link to="/my-tests" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">My Tests</Link>
                        <Link to="/practice" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Practice</Link>
                        <Link to="/analytics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Analytics</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <UserCircle className="h-10 w-10 text-gray-500" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">John Doe</div>
                                <div className="text-sm font-medium text-gray-500">john@example.com</div>
                            </div>
                            <button className="ml-auto p-1 rounded-full text-gray-500 hover:bg-gray-100">
                                <Bell className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center">
                                <UserCircle className="h-5 w-5 mr-2 text-gray-500" /> Profile
                            </Link>
                            <Link to="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center">
                                <Settings className="h-5 w-5 mr-2 text-gray-500" /> Settings
                            </Link>
                            <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center">
                                <BookOpen className="h-5 w-5 mr-2 text-gray-500" /> My Courses
                            </Link>
                            <Link to="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100 flex items-center">
                                <LogOut className="h-5 w-5 mr-2 text-red-500" /> Sign out
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}{/* Commit 1 */}
{/* Commit 2 */}
{/* Commit 3 */}
{/* Commit 4 */}
{/* Commit 5 */}
{/* Commit 6 */}
{/* Commit 7 */}
{/* Commit 8 */}
{/* Commit 9 */}
{/* Commit 10 */}
{/* Commit 11 */}
{/* Commit 12 */}
{/* Commit 13 */}
