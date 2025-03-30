
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

      {/* Animated Computer/Tech Element */}
      <div className={`absolute bottom-20 right-20 w-[300px] h-[300px] transition-all duration-1000 ${isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Base/Stand of the computer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gradient-to-r from-[#333] via-[#666] to-[#333] rounded"></div>
        
        {/* Monitor/Screen */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-60 h-40 bg-gradient-to-br from-[#0a0a14] to-[#1a1a2e] rounded-md border-2 border-[#444] overflow-hidden shadow-lg">
          {/* Screen content - animated code */}
          <div className="absolute inset-1 bg-[#0a0a14] overflow-hidden">
            {/* Animated code lines */}
            <div className="absolute inset-0 flex flex-col gap-[3px] animate-[scroll_30s_linear_infinite]">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i} 
                  className="h-2 bg-gradient-to-r from-[#00FF41]/40 to-transparent rounded-full" 
                  style={{ 
                    width: `${Math.floor(Math.random() * 80) + 20}%`,
                    opacity: Math.random() * 0.8 + 0.2
                  }}
                ></div>
              ))}
            </div>
            
            {/* Terminal blinking cursor */}
            <div className="absolute bottom-2 left-2 h-2 w-2 bg-[#00FF41] animate-[blink_1s_ease-in-out_infinite]"></div>
          </div>
        </div>
        
        {/* Keyboard (simplified) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-10 bg-gradient-to-b from-[#333] to-[#222] rounded-md transform translate-y-[-8px] rotate-x-45 perspective-900 shadow-md">
          <div className="absolute inset-2 grid grid-cols-12 gap-[2px]">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="bg-[#111] rounded-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Floating icons around the computer */}
        <div className="absolute inset-0 animate-[float_10s_ease-in-out_infinite]">
          {/* Code symbols */}
          <div className="absolute top-10 left-10 text-[#0AFFFF]/40 text-xl font-mono animate-pulse" style={{ animationDuration: '4s' }}>{"{"}</div>
          <div className="absolute top-5 right-20 text-[#00FF41]/40 text-xl font-mono animate-pulse" style={{ animationDuration: '3s' }}>{"<>"}</div>
          <div className="absolute bottom-40 right-5 text-[#0AFFFF]/40 text-xl font-mono animate-pulse" style={{ animationDuration: '5s' }}>{"[]"}</div>
          <div className="absolute bottom-28 left-5 text-[#00FF41]/40 text-xl font-mono animate-pulse" style={{ animationDuration: '6s' }}>{"/"}</div>
        </div>
      </div>

      {/* Animated data visualization element */}
      <div className={`absolute top-60 left-20 w-[200px] h-[200px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Cyber radar animation */}
        <div className="absolute inset-0 border-2 border-[#0AFFFF]/20 rounded-full">
          <div className="absolute inset-[10%] border border-[#0AFFFF]/15 rounded-full"></div>
          <div className="absolute inset-[20%] border border-[#0AFFFF]/15 rounded-full"></div>
          <div className="absolute inset-[30%] border border-[#0AFFFF]/15 rounded-full"></div>
          <div className="absolute inset-[40%] border border-[#0AFFFF]/15 rounded-full"></div>
          <div className="absolute inset-[50%] border border-[#0AFFFF]/15 rounded-full"></div>
          
          {/* Radar sweep animation */}
          <div className="absolute top-1/2 left-1/2 h-[50%] w-1 bg-gradient-to-t from-[#0AFFFF]/50 to-transparent origin-bottom animate-[radar-sweep_4s_linear_infinite]"
               style={{ 
                 transformOrigin: 'bottom center',
                 animation: 'spin 4s linear infinite'
               }}
          ></div>
          
          {/* Blips on the radar */}
          <div className="absolute top-[30%] left-[70%] w-2 h-2 bg-[#00FF41] rounded-full animate-ping"></div>
          <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-[#0AFFFF] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-[#00FF41] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundElement;
