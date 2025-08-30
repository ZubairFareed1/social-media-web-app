import React from 'react'
import Image from 'next/image';
interface profilePictureSqure  {
    src : string;
    alt : string;
    size?: number;
}
export default function ProfilePictureSquare({src, alt, size=100}:profilePictureSqure) {
  return (
    <div className={`w-[80px] h-[80px] overflow-hidden relative`}>
        <Image
                src={src}
                alt={alt}
                fill
                style={{
                    
                    objectFit: 'cover',
                  
                }}
                className='rounded-md'
                />
        
      
    </div>
  )
}
