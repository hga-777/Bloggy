import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-purple-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link
            to='/'
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-pink-500 to-lime-500 rounded-lg text-white'>
              BLO
            </span>
            <span className='px-2 py-1 bg-gradient-to-r from-lime-500 via-pink-500 to-blue-500 rounded-lg text-white'>
              BBY
            </span>
          </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.linkedin.com/in/hritik-anand-b60a3a224/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Creator
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blobby
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/hga-777'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link 
                href='https://www.youtube.com/@gad-an-tik'
                target='_blank'
                rel='noopener noreferrer'                
                >
                    YouTube
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Gad_An_Tik"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon 
            href='https://github.com/hga-777' 
            icon={BsGithub}
            target='_blank'
            rel='noopener noreferrer'              
            />
            <Footer.Icon 
            href='https://www.youtube.com/@gad-an-tik' 
            icon={BsYoutube}
            target='_blank'
            rel='noopener noreferrer'
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}