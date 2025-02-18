import { div } from 'framer-motion/client'
import React, { createElement } from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const stackItems = [
    { id: 1, name: 'React', icon: FaReact, color: '#61dafb' },
    { id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#339933' },
    { id: 3, name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { id: 4, name: 'MongoDb', icon: SiMongodb, color: '#47A248' },
    { id: 5, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
    { id: 6, name: 'Prisma', icon: SiPrisma, color: '#858585' },
    { id: 7, name: 'PostgreSQL', icon: SiPostgresql, color: '#36618d' },
    { id: 8, name: 'TailwindCSS', icon: SiTailwindcss , color: '#0091b9' },

    
]

const Stack = () => {
  return (
    <section className='py-16 glass' id='stack'>
        <div className='max-w-[1200px] mx-auto px-4 text-center'>
            <h2 className='text-5xl text-gray-200 font-bold mb-3'>My Fav Stack</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '> 
                {stackItems.map((item) => (
                    <div 
                    key={item.id}
                    className='flex items-center justify-center flex-col rounded-xl p-4'>
                        <div className='mb-4 bg-white/10 p-6 rounded-xl ' >
                            {createElement(item.icon, {
                                className: 'w-32 h-32',
                                style: {color: item.color}
                            })}
                        </div>
                        <p className='text-gray-400 font-semibold text-3xl'> {item.name}</p>
                    </div>
                ))}
            </div>

        </div>
    </section>

  )
}

export default Stack