
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Tech-themed dark background with code pattern */}
      <div 
        className={`absolute inset-0 bg-[#121218] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgLz4KPHBhdGggZD0iTTAgMGgxMHYxMEgwem0xMCAxMGgxMHYxMEgxMHoiIGZpbGw9IiMwMEZGNDEiIGZpbGwtb3BhY2l0eT0iMC4wNSIgLz4KPC9zdmc+')",
               backgroundSize: "20px 20px"
             }}
        ></div>
      </div>
      
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e17]/50 to-[#0a0a14]/80"></div>
      
      {/* Digital circuit board elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KPGxpbmUgeDE9IjAiIHkxPSIxMCIgeDI9IjEwMCIgeTI9IjEwIiBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxsaW5lIHgxPSIwIiB5MT0iMzAiIHgyPSIxMDAiIHkyPSIzMCIgc3Ryb2tlPSIjMDBGRjQxIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iMCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0iIzAwRkY0MSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjAiIHkxPSI3MCIgeDI9IjEwMCIgeTI9IjcwIiBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxsaW5lIHgxPSIwIiB5MT0iOTAiIHgyPSIxMDAiIHkyPSI5MCIgc3Ryb2tlPSIjMDBGRjQxIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iMTAiIHkxPSIwIiB4Mj0iMTAiIHkyPSIxMDAiIHN0cm9rZT0iIzAwRkY0MSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMCIgeDI9IjMwIiB5Mj0iMTAwIiBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxsaW5lIHgxPSI1MCIgeTE9IjAiIHgyPSI1MCIgeTI9IjEwMCIgc3Ryb2tlPSIjMDBGRjQxIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iNzAiIHkxPSIwIiB4Mj0iNzAiIHkyPSIxMDAiIHN0cm9rZT0iIzAwRkY0MSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMCIgeDI9IjkwIiB5Mj0iMTAwIiBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiIGZpbGw9IiMwQUZGRkYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMwQUZGRkYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IiMwQUZGRkYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjIiIGZpbGw9IiMwQUZGRkYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iOTAiIHI9IjIiIGZpbGw9IiMwQUZGRkYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')",
               backgroundSize: "200px 200px"
             }}
        ></div>
      </div>
      
      {/* Animated cyber elements */}
      <div className={`absolute top-20 right-10 w-64 h-64 rounded-full bg-[#0AFFFF]/5 blur-3xl animate-pulse transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#00FF41]/5 blur-3xl animate-pulse transition-all duration-1000 delay-700 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
      
      {/* Binary data streams - animated vertical elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent left-[10%] animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent left-[30%] animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#0AFFFF] to-transparent left-[70%] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#0AFFFF] to-transparent left-[90%] animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>
    </div>
  );
};

export default BackgroundElement;
