"use client";

import { useEffect } from "react";

export default function Error401({ error,reset }: {error:Error & { digest?: string },reset: () => void}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <i className="fa-regular fa-circle-xmark h-6 w-6 text-3xl text-red-500" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Something went wrong!</h2>
          <button onClick={()=>reset()} className="hov4 text-xl text-red-600">try again ?</button>
        </div>
      </div>
    </div>
  );
}
