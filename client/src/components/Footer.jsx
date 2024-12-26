import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsApple, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs"

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-orange-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl dark:text-white">
                        <span className='px-2 py-2 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-500 rounded-lg text-white'>Swiftify</span>
                        Academy
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                100 JS Projects
                            </Footer.Link>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                Author
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                Discord
                            </Footer.Link>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                YouTube
                            </Footer.Link>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                Instagram
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Swiftify's Blog" year={ new Date().getFullYear() }/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={ BsFacebook }/>
                    <Footer.Icon href='#' icon={ BsApple }/>
                    <Footer.Icon href='#' icon={ BsInstagram }/>
                    <Footer.Icon href='#' icon={ BsTwitter }/>
                    <Footer.Icon href='#' icon={ BsGithub }/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
