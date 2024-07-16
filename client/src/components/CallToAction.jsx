import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn know more about Gad-An-Tik
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the official youtube channel 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://youtube.com/@gad-an-tik?feature=shared" target='_blank' rel='noopener noreferrer'>
                    Gad-An-Tik🫡
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1448734171.jpg" />
        </div>
    </div>
  )
}