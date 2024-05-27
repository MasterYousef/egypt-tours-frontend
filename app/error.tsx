"use client";
export default function Error401({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <i className="fa-regular fa-circle-xmark h-6 w-6 text-red-500" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Error</h2>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
