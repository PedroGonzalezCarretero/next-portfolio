import Hero from '@/components/Hero';

export default function Home() {
   return (
      <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden mx-auto bg-black-100 sm:px-10'>
         <div className='max-w-7xl w-full'>
            <Hero />
         </div>
      </main>
   );
}
