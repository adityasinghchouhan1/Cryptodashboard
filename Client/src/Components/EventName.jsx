import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const EventName = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const coordinators = [
    'Select Coordinator',
    'John Doe',
    'Jane Smith',
    'Alex Johnson',
    'Emily Davis',
  ]
  return (
    <div className="min-h-screen sm:w-[1050px] bg-black/30 sm:px-6 py-3 px-3 text-white font-sans rounded-xl border border-pink-500 shadow-xl overflow-auto">
      {/* Header */}
      <div className="flex justify-start items-center mb-6">
        <Link
          to="/dashboard/new-requests"
          className=" text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-3xl px-1.5 bg-gray-800 text-center pb-1.5 mt-1.5 me-2"
        >
          &#x2190;
        </Link>
        <h1 className="sm:text-3xl text-2xl font-semibold  sm:font-bold">
          Event Name
          <span className="text-base font-normal ps-1">(Venue Details)</span>
        </h1>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <div className="flex mb-2">
          {[
            'Event Details',
            'Assign Coordinator/Coordinator',
            'Session Management',
            'Generate SOW',
          ].map((tab, idx, arr) => (
            <NavLink
              to="/dashboard/new-requests"
              key={idx}
              className={`bg-transparent border border-pink-400 sm:text-sm text-xs text-pink-400 hover:text-white hover:bg-pink-400 transition-all px-4 py-2 font-thin hover:shadow-[0_0_15px_1px_rgba(236,72,153,0.8)]
        ${idx === 0 ? 'rounded-l-md' : ''}
        ${idx === arr.length - 1 ? 'rounded-r-md' : ''}`}
            >
              {tab}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Assign Coordinator and Event Info */}
      <div className="flex sm:flex-row flex-col justify-between mb-2 gap-6">
        <div className="sm:w-1/2 relative">
          <label className="block mb-1 font-semibold text-base">
            Assign Coordinator
          </label>
          <div
            className="flex items-center rounded-md border border-white text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <select
              className="w-full bg-transparent px-3 py-1 text-base text-white outline-none appearance-none"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              onBlur={() => setIsOpen(false)}
            >
              {coordinators.map((name, idx) => (
                <option
                  key={idx}
                  value={name}
                  className="text-black bg-white text-base"
                  disabled={idx === 0}
                  hidden={idx === 0}
                >
                  {name}
                </option>
              ))}
            </select>
            <div className="px-3">
              {isOpen ? (
                <FaChevronUp className="text-white" size={20} />
              ) : (
                <FaChevronDown className="text-white" size={20} />
              )}
            </div>
          </div>

          <button className="text-xs font-normal text-pink-500 underline mt-2">
            Add New Coordinator
          </button>
        </div>

        <div className="sm:w-1/2 w-full">
          <label className="block mb-1 font-semibold text-base">
            Event Name (Venue Here)
          </label>
          <div className="border border-pink-400 p-1 rounded text-white font-normal text-sm flex justify-start gap-20 items-start mb-2">
            <span>Start 12-12-2023</span>
            <span>End 15-12-2023</span>
          </div>

          <div className="border border-pink-400 p-1 rounded text-white font-normal text-sm flex justify-between items-start">
            Some Location 12, Name Here, City, State.
          </div>
        </div>
      </div>

      {/* Assign Contractor Section */}
      <div className="flex sm:flex-row flex-col gap-6">
        {/* Rooms */}
        <div className="sm:w-1/3">
          <label className="block mb-2 font-semibold text-lg">
            Assign Contractor
          </label>
          <div className="space-y-3 bg-black px-5 py-4 rounded-lg border border-pink-400 ">
            {[1, 2, 3, 4, 5].map((room) => (
              <div
                key={room}
                className="rounded-xl p-3 border border-pink-400 bg-black shadow-pink-400 group hover:bg-pink-400 hover:shadow-[0_0_15px_3px_rgba(236,72,153,0.8)] transition-all"
              >
                <h2 className="font-bold text-md flex justify-between items-center text-base">
                  Meeting Room {room}
                  <span className="text-xs font-normal text-pink-400 group-hover:text-black">
                    ➕ 12 Positions
                  </span>
                </h2>
                <p className="text-xs mt-1 font-normal">
                  Start from 12th Jan, 2023 - Ends 15th Jan, 2023
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Positions */}
        <div className="sm:w-2/3 overflow-x-auto">
          <label className="block mb-2 font-normal text-lg text-white ">
            Positions
          </label>

          <div className="pr-1 rounded-5">
            <table className="w-full text-left border-collapse border border-pink-400 font-normal ">
              <thead>
                <tr className="text-white text-sm bg-black rounded-5 font-normal">
                  <th className="p-3 font-normal">Position</th>
                  <th className="p-3 font-normal">Time</th>
                  <th className="p-3 font-normal">Info</th>
                  <th className="p-3 font-normal">Quantity</th>
                  <th className="p-3 font-normal">Contractor</th>
                </tr>
              </thead>

              <tbody>
                {[...Array(8)].map((_, i) => (
                  <tr
                    key={i}
                    className="bg-gradient-to-r from-black via-gray-900 to-black text-white border-b border-pink-500 text-xs"
                  >
                    <td className="p-3">Camera 1 (Video)</td>
                    <td className="p-3">9 am - 7 pm</td>
                    <td className="p-3 font-semibold">LP default</td>
                    <td className="p-3">20</td>
                    <td className="p-3 relative">
                      <div className="relative">
                        <select className="w-full appearance-none bg-transparent border border-pink-500 text-white px-3 py-1 rounded-md pr-8">
                          <option className="text-black text-xs">
                            Select Contractor
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <FaChevronDown className="text-white text-sm" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Pagination row inside table */}
              <tfoot>
                <tr>
                  <td colSpan="5">
                    <div className="flex justify-center items-center py-1 bg-black space-x-3">
                      {/* Left Arrow with Tail */}
                      <button className=" text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-2xl">
                        &#x2190;
                      </button>

                      {/* Active Page Dot */}
                      <button className="w-2 h-2 rounded-full  shadow-inner ring-2 ring-pink-100" />

                      {/* Right Arrow with Tail */}
                      <button className="text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-2xl">
                        &#x2192;
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Save Edits */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-t from-pink-400 to-pink-400 text-white font-normal text-lg px-10 py-2 rounded-md  transition duration-300 hover:shadow-pink-500 shadow-[0_0_15px_3px_rgba(236,72,153,0.8)] ">
          Save Edits
        </button>
      </div>
    </div>
  )
}

export default EventName
