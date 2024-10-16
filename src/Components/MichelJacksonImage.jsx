import React from 'react';

const MichelJacksonImage = () => {
    const backgroundImageUrl = "https://s3-alpha-sig.figma.com/img/27d6/181f/b614afab3396f4c60bfa19b926b4b71d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkTUuTgc27Wj1ZlOqf2AOLEDtVlwwE2Br0N792sklm~Yc1AmgSR9lLmqNZFqSMdJb0edEy8sQ0Y8GdQdamrAt0iMfpPlBmadwg6KvS~PMWIILyHRi9zF95pMEwrgvLlPf6QhxxN4xEJunigkl5OqPR0LuRkP~klD46F33oQ42sGoYscEhvIwObSyN3r8XfKlIyJLAv7pftnFfulEXtqAh5ad8W0Vom8uJG0UIW4TqKu4Qd-21eK8UkTggKtGzs9j3lWNeMSbnUD1a2RRSNp3STRF-X9CXyCpqhNGmxdrAWeBOqPsXmyi77eLEE11j5EelOeUMmlCS3amxndxl4r8WA__";
    const michelImage = "https://s3-alpha-sig.figma.com/img/228e/160e/5d55e4ce985c98f27a2e4560589055d1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P9SYksuefhQp6N56DBqSRD6r~JpSsVCJNaS0RASlZxnF074qUyjcigjrA60yqEsweOr1MDBfcESlrHN1rxBkDvYybes-rNlsiwpLvRroR~Q7Mis~mteh5p4nhE6sOvjYb-McmV07ry2g5h-OnuGfmUpuHlkhk8m3o~9l61kbb7ZGdf~YTqYAojdmdwBrvcfgTHpM3JHy9CzpR5~xMI7AgJuafq-OUcAMCaJ6hVx3ChP4M~B5K7v8JDThPOmL6HOB3XINfcwsShM3s7zFYvIeLHEhJ84-aqtfcdMm~V2PEbTgrvYEpwRwG8Ea0rQk5JoNTKXdvTmCFtb4JM6ePuiw5Q__";

    return (
        <div className="flex justify-center items-center mt-10">
            <div
                className="michel-jackson-card bg-cover bg-center rounded-lg shadow-lg"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    width: '400px', // Adjusted card width
                    height: '160px', // Fixed height for horizontal card
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '10px', // Padding inside the card
                }}
            >
                <div style={{ color: 'white', textAlign: 'left' }}>
                    {/* Verified Artist with SVG */}
                    <p style={{ display: 'flex', alignItems: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
                        <svg width="12" height="12" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                            <path d="M13.7125 25.6H12.3812L9.24999 22.375H4.61874L3.62499 21.4375V16.9L0.456238 13.675V12.3437L3.62499 9.11875V4.5625L4.61874 3.625H9.24999L12.3812 0.418747H13.7125L16.9375 3.625H21.4937L22.4312 4.54375V9.11875L25.6375 12.3437V13.675L22.375 16.9V21.4375L21.4375 22.375H16.9375L13.7125 25.6ZM10.6187 17.65H11.95L19.0187 10.5812L17.6875 9.25L11.2937 15.6625L8.70624 13.075L7.37499 14.4062L10.6187 17.65Z" fill="url(#paint0_linear_1_148)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_148" x1="13.0469" y1="0.418747" x2="33.4157" y2="13.3084" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#53E0FF" />
                                    <stop offset="1" stopColor="#1E94E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span style={{ fontFamily: 'Poppins', fontSize: '8px' }}>Verified Artist</span>
                    </p>

                    <h2 className='text-lg font-semibold' style={{ fontFamily: 'Poppins', lineHeight: '30px' }}>
                        Michael Jackson
                    </h2>
                    <span
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            fontWeight: 100,
                            color: '#ffffff',
                        }}
                    >
                        27,852,501 monthly listeners
                    </span>
                </div>

                <img
                    src={michelImage}
                    alt="Michael Jackson"
                    style={{
                        width: '170px', // Adjusted image width
                        height: '220px', // Full height of the card
                        borderRadius: '8px', // Rounded corners for the image
                        marginRight: '10px', // Space between image and text
                        marginBottom: '58px' // Align the image properly within the card
                    }}
                />
            </div>
        </div>
    );
};

export default MichelJacksonImage;
