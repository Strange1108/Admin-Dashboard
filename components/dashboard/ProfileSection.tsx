// 'use client'

// import { Input } from '@/components/ui/Input'

// export default function ProfileSection() {
//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">Profile</h2>
      
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-4 mb-6">
//           <div className="h-16 w-16 rounded-full overflow-hidden">
//             <img src="/api/placeholder/64/64" alt="Profile" className="w-full h-full object-cover" />
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold">John Doe</h3>
//             <p className="text-gray-500">Frontend Developer</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Full Name</label>
//             <Input defaultValue="John Doe" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <Input defaultValue="john.doe@example.com" type="email" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// components/dashboard/ProfileSection.tsx
'use client'

import { Input } from '@/components/ui/Input'

export default function ProfileSection() {
  // Option 1: Using UI Avatars service
  const avatarUrl = `https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff&size=128`
  
  // Option 2: Using Gravatar (if user has one)
  // const gravatarUrl = `https://www.gravatar.com/avatar/[MD5_HASH]?s=200`
  
  // Option 3: If you want to use a local image from your public folder
  // Make sure to add the image to your public folder first
  // const localImagePath = '/images/default-avatar.png'

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img 
              src={avatarUrl}
              alt="John Doe" 
              className="w-full h-full object-cover"
              // Add error handling for image load failures
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=User&background=000&color=fff&size=128`;
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <Input defaultValue="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input defaultValue="john.doe@example.com" type="email" />
          </div>
        </div>
      </div>
    </div>
  )
}