/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                'primary': {
                    100: '#1C1C1E'
                },
                'secondary': {
                    100: '#EEA347'
                },
                'off-green': {
                    100: '#11894A'
                },
                'white': {
                    100: '#FFFFFF',
                    200: '#717171'
                },
                'black': {
                    100: '#000000',
                },

                'blue': {
                    100: '#006395'
                },

            },
        },
    },
    plugins: [],
}