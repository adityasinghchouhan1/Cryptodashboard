import React from 'react'
import { FaSearch, FaEye, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EventRequests = () => {
  const rows = [...Array(8)].map((_, i) => ({
    name: 'Filled Name',
    start: 'Jan 12, 2024',
    end: 'Jan 14, 2024',
    client: 'Muhammad Asad',
    contact: '+123-456-7890',
    venue: 'Lorem Ipsum Dolor Sit Amet',
    city: 'City Name',
    state: 'State Name',
    zipcode: '123456',
  }))

  return (
    <div className="py-2 text-white bg-black/40 rounded-lg border-2 border-pink-500 overflow-x-auto">
      {/* Header Section with Title and Actions */}
      <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between mb-4 px-5">
        <h2 className="sm:text-2xl text-lg font-bold text-white mb-2 sm:mb-0">
          Event Requests
        </h2>

        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/3 font-thin" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border border-pink-500 text-white px-4 py-1 sm:py-1.5 ps-12 w-56 rounded-lg shadow-sm focus:outline-none sm:text-sm text-lg"
            />
          </div>

          {/* Plus Icon Button */}
          <button className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-pink-600 rounded-lg flex items-center justify-center shadow-md">
            <FaPlus className="text-white text-sm" />
          </button>
        </div>
      </div>

      {/* Table container */}
      <div className="w-[1000px] overflow-x-auto">
        <div className="min-w-[1100px]">
          <table className="w-full text-sm text-left text-white border-separate border-spacing-0">
            <thead className="bg-pink-400 text-white uppercase text-xs">
              <tr>
                <th className="sticky left-0 z-20 bg-pink-400 px-4 py-3 w-[150px]">
                  Event Name
                </th>
                <th className="px-4 py-3 w-[130px]">Event Start</th>
                <th className="px-4 py-3 w-[130px]">Event End</th>
                <th className="px-4 py-3 w-[150px]">Client Name</th>
                <th className="px-4 py-3 w-[150px]">Contact Info</th>
                <th className="px-4 py-3 w-[240px]">Venue</th>
                <th className="px-4 py-3 w-[120px]">City</th>
                <th className="px-4 py-3 w-[120px]">State</th>
                <th className="px-4 py-3 w-[120px]">Zipcode</th>
              </tr>
            </thead>
            <tbody className="bg-black/40 divide-y divide-pink-500">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-pink-950 transition">
                  <td className="sticky left-0 bg-black/45 z-10 px-4 py-3 w-[150px]">
                    <div className="flex items-center gap-2">
                      <Link to="EventName">
                        <FaEye className="text-pink-400" />
                      </Link>
                      <span>{row.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 w-[130px]">{row.start}</td>
                  <td className="px-4 py-3 w-[130px]">{row.end}</td>
                  <td className="px-4 py-3 w-[150px]">{row.client}</td>
                  <td className="px-4 py-3 w-[150px]">{row.contact}</td>
                  <td className="px-4 py-3 w-[240px]">{row.venue}</td>
                  <td className="px-4 py-3 w-[120px]">{row.city}</td>
                  <td className="px-4 py-3 w-[120px]">{row.state}</td>
                  <td className="px-4 py-3 w-[120px]">{row.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center py-2 border-t border-pink-500 bg-black">
        <div className="flex items-center gap-2 text-white">
          {/* Previous Arrow */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition">
            &#8592;
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 flex items-center justify-center text-sm ${
                num === 4
                  ? 'text-white font-bold'
                  : 'hover:text-pink-600 transition'
              }`}
            >
              {num}
            </button>
          ))}

          {/* Next Arrow */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventRequests
