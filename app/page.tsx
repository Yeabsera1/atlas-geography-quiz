
import DropdownOptions from '@/components/DropdownOptions'
import InputBox from '@/components/InputBox'
import Button from '@/components/Buttons'
export default function Home() {

  return (
   <section className='flex flex-col justify-center items-center my-10 '>
{/* //from flowbite */}
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Atlas! </h1>
<div className='text-center w-[48%]'>
    <h1>Embark on a journey across the continents, exploring the rich tapestries of countries, cities, and cultures. Your mission? To unlock the mysteries of our world through challenges and trivia. Ready to test your geography prowess?</h1>
</div>
<section className='p-10 my-10 rounded-lg shadow-xl w-[65%]'>

{/* Flowbite? */}
<InputBox/>

<DropdownOptions/>
<div className=" flex items-center justify-center">
<Button/>
</div>

</section>
   </section>
  )
}
