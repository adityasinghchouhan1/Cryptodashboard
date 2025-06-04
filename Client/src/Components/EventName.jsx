// import React from 'react'
// import { FaSearch } from 'react-icons/fa'

// const EventName = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-900 to-black p-4 text-white font-sans rounded-xl border border-pink-500">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">
//           Event Name{' '}
//           <span className="text-sm font-normal">(Venue Details)</span>
//         </h1>
//         <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
//           Bijith K K
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
//           Event Details
//         </button>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
//           Assign Coordinator/Coordinator
//         </button>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
//           Session Management
//         </button>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
//           Generate SOW
//         </button>
//       </div>

//       {/* Assign Coordinator and Event Info */}
//       <div className="flex justify-between mb-6">
//         <div className="w-1/2 pr-4">
//           <label className="block mb-1 font-semibold">Assign Coordinator</label>
//           <div className="flex items-center bg-white rounded-md overflow-hidden mb-2">
//             <input
//               type="text"
//               placeholder="Search Coordinator"
//               className="px-3 py-2 w-full text-black outline-none"
//             />
//             <FaSearch className="text-black mx-2" />
//           </div>
//           <button className="text-sm text-pink-500 underline">
//             Add New Coordinator
//           </button>
//         </div>
//         <div className="w-1/2 pl-4">
//           <label className="block mb-1 font-semibold">
//             Event Name (Venue Here)
//           </label>
//           <div className="flex space-x-2 mb-2">
//             <input
//               type="date"
//               className="px-3 py-2 w-1/2 text-black rounded-md outline-none"
//               value="2023-12-12"
//               readOnly
//             />
//             <input
//               type="date"
//               className="px-3 py-2 w-1/2 text-black rounded-md outline-none"
//               value="2023-12-15"
//               readOnly
//             />
//           </div>
//           <input
//             type="text"
//             className="w-full px-3 py-2 text-black rounded-md outline-none"
//             value="Some Location 12, Name Here, City, State."
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Assign Contractor Section */}
//       <div className="flex">
//         {/* Rooms */}
//         <div className="w-1/3 pr-4">
//           <label className="block mb-2 font-semibold">Assign Contractor</label>
//           <div className="space-y-3">
//             {[1, 2, 3, 4, 5].map((room) => (
//               <div
//                 key={room}
//                 className={`rounded-lg p-4 ${
//                   room === 1 ? 'bg-pink-600' : 'bg-gray-800'
//                 } text-white`}
//               >
//                 <h2 className="font-bold">
//                   Meeting Room {room} ➕ 12 Positions
//                 </h2>
//                 <p className="text-sm">
//                   Start from 12th Jan, 2023 - Ends 15th Jan, 2023
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Positions */}
//         <div className="w-2/3 pl-4">
//           <label className="block mb-2 font-semibold">Positions</label>
//           <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="grid grid-cols-5 gap-2 items-center bg-gray-800 p-3 rounded-lg"
//               >
//                 <div>Camera 1 (Video)</div>
//                 <div>9 am - 7 pm</div>
//                 <div>LP default</div>
//                 <div>20</div>
//                 <select className="text-black rounded-md px-2 py-1">
//                   <option>Select Contractor</option>
//                 </select>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-end items-center mt-4 space-x-2">
//             <button className="w-6 h-6 bg-pink-500 text-white rounded-full">
//               ◀
//             </button>
//             <span className="text-white">1</span>
//             <button className="w-6 h-6 bg-pink-500 text-white rounded-full">
//               ▶
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Save Edits */}
//       <div className="mt-6 text-center">
//         <button className="bg-pink-500 px-6 py-2 rounded-md text-white font-semibold">
//           Save Edits
//         </button>
//       </div>
//     </div>
//   )
// }

// export default EventName

import React from 'react'
import { FaSearch } from 'react-icons/fa'

const EventName = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-6 text-white font-sans rounded-xl border border-pink-500 shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Event Name{' '}
          <span className="text-sm font-normal">(Venue Details)</span>
        </h1>
        <div className="bg-red-600 text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wide">
          Bijith K K
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {[
          'Event Details',
          'Assign Coordinator/Coordinator',
          'Session Management',
          'Generate SOW',
        ].map((tab, idx) => (
          <button
            key={idx}
            className="bg-gradient-to-br from-fuchsia-800 to-pink-600 text-white px-4 py-2 rounded-md font-medium shadow-md"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Assign Coordinator and Event Info */}
      <div className="flex justify-between mb-6 gap-6">
        <div className="w-1/2">
          <label className="block mb-1 font-semibold text-lg">
            Assign Coordinator
          </label>
          <div className="flex items-center bg-white rounded-md overflow-hidden mb-2">
            <input
              type="text"
              placeholder="Search Coordinator"
              className="px-3 py-2 w-full text-black outline-none"
            />
            <FaSearch className="text-black mx-3" />
          </div>
          <button className="text-sm text-pink-500 underline">
            Add New Coordinator
          </button>
        </div>

        <div className="w-1/2">
          <label className="block mb-1 font-semibold text-lg">
            Event Name (Venue Here)
          </label>
          <div className="flex space-x-2 mb-2">
            <input
              type="date"
              className="px-3 py-2 w-1/2 text-black rounded-md outline-none"
              value="2023-12-12"
              readOnly
            />
            <input
              type="date"
              className="px-3 py-2 w-1/2 text-black rounded-md outline-none"
              value="2023-12-15"
              readOnly
            />
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 text-black rounded-md outline-none"
            value="Some Location 12, Name Here, City, State."
            readOnly
          />
        </div>
      </div>

      {/* Assign Contractor Section */}
      <div className="flex gap-6">
        {/* Rooms */}
        <div className="w-1/3">
          <label className="block mb-2 font-semibold text-lg">
            Assign Contractor
          </label>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((room) => (
              <div
                key={room}
                className={`rounded-xl p-4 border-2 ${
                  room === 1
                    ? 'bg-pink-600 border-white'
                    : 'bg-gray-900 border-gray-700'
                } text-white shadow-md`}
              >
                <h2 className="font-bold text-md flex justify-between items-center">
                  Meeting Room {room}{' '}
                  <span className="text-sm font-semibold">➕ 12 Positions</span>
                </h2>
                <p className="text-sm mt-1">
                  Start from 12th Jan, 2023 - Ends 15th Jan, 2023
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Positions */}
        <div className="w-2/3">
          <label className="block mb-2 font-semibold text-lg">Positions</label>
          <div className="overflow-auto max-h-[420px] space-y-3 pr-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-2 items-center bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-pink-500"
              >
                <div>Camera 1 (Video)</div>
                <div>9 am - 7 pm</div>
                <div>LP default</div>
                <div>20</div>
                <select className="text-black rounded-md px-2 py-1">
                  <option>Select Contractor</option>
                </select>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 space-x-3">
            <button className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              ❮
            </button>
            <span className="text-white">1</span>
            <button className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Save Edits */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-fuchsia-800 to-pink-600 px-10 py-2 rounded-md text-white font-semibold text-lg shadow-lg">
          Save Edits
        </button>
      </div>
    </div>
  )
}

export default EventName
