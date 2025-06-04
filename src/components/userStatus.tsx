import { useState, useEffect } from 'react';

export default function UserStatus({ title = "online", maxRange = 100 }) {
  const [onlineCount, setOnlineCount] = useState(null);

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * maxRange) + 1;
    setOnlineCount(randomCount);
  }, [maxRange]);

  if (onlineCount === null) {
    // Render a placeholder (or nothing) until the client sets the real value
    return (
      <div className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-sm">
        <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
        <span>Loading…</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-sm">
      <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
      <span>{onlineCount} {title}</span>
    </div>
  );
}
