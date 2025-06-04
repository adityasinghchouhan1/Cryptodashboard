import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa'
import { Bell } from 'lucide-react'

import { FaBitcoin } from 'react-icons/fa'
import { FaInfo } from 'react-icons/fa'
import user from '../../public/user.jpg'

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState('Events')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleMenu = (menuName) => {
    setExpandedMenu((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* Header - fixed at top */}
      <header className="relative top-0 left-0 w-full h-16 flex justify-between items-center px-6  z-50">
        <div className="flex items-center gap-3">
          <FaBitcoin className="text-pink-500 bg-white rounded-full sm:text-5xl" />
          <button
            className="md:hidden text-pink-300"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex sm:gap-5 gap-3 cursor-pointer items-center">
            <FaInfo className="text-white p-1 rounded border" size={22} />

            <Bell
              className="hover:text-pink-300 text-white bg-transparent"
              size={20}
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={user}
              className="w-12 h-12 rounded-full bg-center bg-cover border-2 border-pink-400"
            />
            <div className="flex flex-col justify-center items-start text-sm">
              <p className="flex font-normal">
                Hi,
                <span className="text-blue-500 font-normal text-sm inline ps-1">
                  user name
                </span>
              </p>
              <span className="text-sm font-normal">welcome back!</span>
            </div>
          </div>
        </div>
      </header>

      {/* Page content layout */}
      <div className="flex pt-2 bg-transparent">
        {/* Sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        <div
          className={`fixed md:static top-16 md:top-0 left-0 z-40 h-[100vh] w-64 p-4 border-2 border-pink-600 rounded-lg  text-white transform bg-black/40 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          {/* Sidebar Content */}
          <div className="space-y-6 mt-4">
            {/* Events */}
            <div>
              <div
                className="flex items-center justify-between p-2 rounded-lg border border-pink-500 cursor-pointer hover:bg-pink-900"
                onClick={() => toggleMenu('Events')}
              >
                <span className="text-base font-semibold text-pink-300">
                  Events
                </span>
                {expandedMenu === 'Events' ? (
                  <FaChevronUp size={22} />
                ) : (
                  <FaChevronDown size={22} />
                )}
              </div>
              {expandedMenu === 'Events' && (
                <div className="pl-4 pt-2 text-sm space-y-1 text-gray-300">
                  {[
                    'New Requests',
                    'Estimate',
                    'Events',
                    'Partial Requests',
                  ].map((item) => (
                    <Link
                      key={item}
                      to={`/dashboard/${item
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="block hover:border p-1 rounded-lg hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              to="/dashboard/positions"
              className="block font-bold text-base"
              onClick={() => setSidebarOpen(false)}
            >
              Positions
            </Link>
            <Link
              to="/dashboard/contractors"
              className="block font-bold text-base"
              onClick={() => setSidebarOpen(false)}
            >
              Contractors
            </Link>

            {/* Users */}
            <div>
              <div
                className="flex items-center justify-between p-2 rounded-lg border border-pink-500 cursor-pointer hover:bg-pink-900"
                onClick={() => toggleMenu('Users')}
              >
                <span className="text-base font-semibold text-pink-400">
                  Users
                </span>
                {expandedMenu === 'Users' ? (
                  <FaChevronUp size={22} />
                ) : (
                  <FaChevronDown size={22} />
                )}
              </div>
              {expandedMenu === 'Users' && (
                <div className="pl-4 pt-2 text-sm space-y-1 text-gray-300">
                  {['Admins', 'Clients', 'Coordinators'].map((item) => (
                    <Link
                      key={item}
                      to={`/dashboard/${item.toLowerCase()}`}
                      className="block hover:border p-1 rounded-lg hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/dashboard/profile"
              className="block font-bold text-base"
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen px-4 pb-4 overflow-x-auto mt-6 sm:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
