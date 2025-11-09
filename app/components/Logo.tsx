export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} flex-shrink-0`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House shape with modern geometric design */}
        <rect width="40" height="40" rx="8" fill="#10B981" />
        
        {/* House icon */}
        <path 
          d="M20 8L12 15V30H16V24H24V30H28V15L20 8Z" 
          fill="white" 
          stroke="white" 
          strokeWidth="0.5"
        />
        
        {/* Door */}
        <rect x="18" y="25" width="4" height="5" fill="#10B981" />
        
        {/* Window */}
        <rect x="14" y="18" width="3" height="3" fill="#10B981" rx="0.5" />
        <rect x="23" y="18" width="3" height="3" fill="#10B981" rx="0.5" />
      </svg>
    </div>
  );
}