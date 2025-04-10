import React from 'react'

function LoaderSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative">
                <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full border-t-4 md:border-t-6 lg:border-t-8 border-b-4 md:border-b-6 lg:border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full border-t-4 md:border-t-6 lg:border-t-8 border-b-4 md:border-b-6 lg:border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
        </div>
    )
}

export default LoaderSpinner