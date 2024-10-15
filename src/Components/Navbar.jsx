import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-container flex flex-row justify-between m-5 w-full'>
      <ul className='flex flex-row justify-start gap-4 list-none m-2' style={{ lineHeight: '18px', fontFamily: 'Poppins' ,marginLeft:'2rem' }}>
        <li className='cursor-pointer text-white hover:text-gray-400'>Music</li>
        <li className='cursor-pointer text-white hover:text-gray-400'>Podcast</li>
        <li className='cursor-pointer text-white hover:text-gray-400'>Live</li>
        <li className='cursor-pointer text-white hover:text-gray-400'>Radio</li>
      </ul>

      <div className="inputField " style={{ background: '#2C0000', padding: '0.12rem', borderRadius: '30px', display: 'flex', alignItems: 'center', width: '90%', maxWidth: '400px', marginRight: '60px' }}>
        <input
          type="text"
          placeholder="Search..."
          className="p-1 w-full rounded-full bg-transparent text-white focus:outline-none"
          style={{ border: 'none', boxShadow: 'none', flex: '1', paddingRight: '2rem,',marginBottom:'0.25rem' }} // Add right padding for space before the icon
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: '0.5rem',marginRight:'0.5rem', width: '20px', height: '20px' }} // Adjust size as needed
        >
          <path
            d="M25.375 25.375L19.9544 19.9448L25.375 25.375ZM22.9583 12.6875C22.9583 15.4115 21.8762 18.0239 19.9501 19.9501C18.0239 21.8763 15.4115 22.9584 12.6875 22.9584C9.9635 22.9584 7.35107 21.8763 5.42491 19.9501C3.49876 18.0239 2.41666 15.4115 2.41666 12.6875C2.41666 9.96353 3.49876 7.3511 5.42491 5.42494C7.35107 3.49879 9.9635 2.41669 12.6875 2.41669C15.4115 2.41669 18.0239 3.49879 19.9501 5.42494C21.8762 7.3511 22.9583 9.96353 22.9583 12.6875V12.6875Z"
            stroke="#F6F6F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
