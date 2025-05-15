import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Bell, UserCircle, Menu, X, Search, LogOut, Settings, BookOpen, LogIn, UserPlus, AlertTriangle } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Check if user is authenticated by looking for token in localStorage
    const isAuthenticated = localStorage.getItem('token') !== null;

    let user = null;
    try {
        user = JSON.parse(localStorage.getItem('user'));
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
    }


    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);



    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle user menu dropdown and close notifications if open
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        if (isNotificationsOpen) setIsNotificationsOpen(false);
    };

    // Toggle notifications dropdown and close user menu if open
    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        if (isUserMenuOpen) setIsUserMenuOpen(false);
    };

    // Initiate logout confirmation
    const initiateLogout = () => {
        setShowLogoutConfirm(true);
        setIsUserMenuOpen(false); // Close the user menu
    };

    // Handle logout confirmation
    const confirmLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        setShowLogoutConfirm(false);
        navigate('/');
    };

    // Cancel logout
    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    return (
<nav className="fixed w-full z-50 bg-gradient-to-r from-custom1 to-custom2 shadow-md py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="block h-10 w-auto" src={logo} alt="Workflow" />
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative rounded-full bg-opacity-20 bg-white flex items-center px-3 py-1">
                            <Search className="h-4 w-4 text-white" />
                            <input
                                type="text"
                                placeholder="Search tests..."
                                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-64 outline-none transition-colors duration-300 text-white placeholder-white"
                            />
                        </div>

                        <Link to="/dashboard" className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-blue-500 hover:bg-opacity-20">
                            Dashboard
                        </Link>
                        <Link to="/my-tests" className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-blue-500 hover:bg-opacity-20">
                            My Tests
                        </Link>
                        <Link to="/practice" className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-blue-500 hover:bg-opacity-20">
                            Practice
                        </Link>
                        <Link to="/analytics" className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-blue-500 hover:bg-opacity-20">
                            Analytics
                        </Link>

                        {isAuthenticated ? (
                            <>
                                {/* Notification bell - only shown when authenticated */}
                                <div className="relative">
                                    <button
                                        onClick={toggleNotifications}
                                        className="p-2 rounded-full hover:bg-white hover:bg-opacity-20"
                                    >
                                        <Bell className="h-5 w-5 text-white" />
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

                                {/* User menu - only shown when authenticated */}
                                <div className="relative ml-3">
                                    <button
                                        onClick={toggleUserMenu}
                                        className="flex items-center space-x-2"
                                    >
                                        <UserCircle className="h-8 w-8 text-white" />
                                        <span className="text-sm font-medium text-white">{capitalize(user.firstName) + " " + capitalize(user.lastName)}</span>
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
                                            <button
                                                onClick={initiateLogout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                                            >
                                                <LogOut className="h-4 w-4 mr-2 text-red-500" /> Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Login and Signup buttons - shown when not authenticated */}
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium rounded-md flex items-center text-white hover:bg-white hover:bg-opacity-20"
                                >
                                    <LogIn className="h-4 w-4 mr-1" /> Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 text-sm font-medium rounded-md flex items-center bg-white text-custom1"
                                >
                                    <UserPlus className="h-4 w-4 mr-1" /> Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-white"
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

                    {isAuthenticated ? (
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <UserCircle className="h-10 w-10 text-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">John Doe</div>
                                    <div className="text-sm font-medium text-gray-500">john@example.com</div>
                                </div>
                                <button
                                    onClick={toggleNotifications}
                                    className="ml-auto p-1 rounded-full text-gray-500 hover:bg-gray-100"
                                >
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
                                <button
                                    onClick={initiateLogout}
                                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100 flex items-center"
                                >
                                    <LogOut className="h-5 w-5 mr-2 text-red-500" /> Sign out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-4 pb-3 border-t border-gray-200 px-5 flex flex-col space-y-2">
                            <Link
                                to="/login"
                                className="w-full py-2 text-center font-medium rounded-md text-blue-600 border border-blue-600 flex items-center justify-center"
                            >
                                <LogIn className="h-5 w-5 mr-2" /> Login
                            </Link>
                            <Link
                                to="/signup"
                                className="w-full py-2 text-center font-medium rounded-md bg-blue-600 text-white flex items-center justify-center"
                            >
                                <UserPlus className="h-5 w-5 mr-2" /> Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            )}

            {/* Logout Confirmation Modal */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
                        <div className="flex items-center mb-4">
                            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                            <h3 className="text-lg font-medium text-gray-900">Confirm Logout</h3>
                        </div>
                        <p className="mb-6 text-gray-700">Are you sure you want to log out?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={cancelLogout}
                                className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmLogout}
                                className="px-4 py-2 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}