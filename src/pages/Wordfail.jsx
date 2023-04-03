import React from 'react'
import set from "../assets/headset.svg"
import homeimg1 from "../assets/homeimage1.svg"
import homeimg2 from "../assets/homeimage2.svg"
import homeimg3 from "../assets/homeimage3.svg"
import homeimg4 from "../assets/homeimage4.svg"
import homeimg11 from "../assets/homeimage11.svg"

const Wordfail = () => {
    return (
        <>
            <div >
                <div className='bg-black flex justify-center w-full' >
                    <div className='text-white'>
                        <h4 className='text-[60px] pt-20' > When words fail,<br />
                            <span className='text-[#F20A0A]'>Music</span> speaks.</h4>
                        <p className='text-[40px] fs-italic'>This is the home of music!</p>
                        <button className='bg-white text-[#F20A0A] rounded-[15px] text-[30px]'>Book an artiste.</button>
                    </div>
                    <div>
                        <img src={set} alt="" />
                    </div>
                </div>

                <div className='mt-[100px] flex justify-center w-full'>
                    <div>
                        <h4 className='text-[30px] '>We are home to the very best talents <br />& artistes, leading the  music industry.</h4>
                        <p className='text-[18px]'>Mocking by Jay has maintained a strong and innovative <br />push to promote capacity
                            building and creativity that <br />showcase the richness and diversity of the Music <br />
                            culture via story-telling.</p>
                        <button>Learn more</button>
                    </div>
                    <div className='flex sa-[10px]'>
                        <img src={homeimg1} alt="" />
                        <img src={homeimg2} alt="" />
                        <img src={homeimg3} alt="" />
                    </div>
                </div>

                <div className='mt-[100px] flex justify-center w-full'>
                    <div>
                        <img src={homeimg4} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[30px]'>
                            We license, distribute and publish rich musiccal<br />
                            content for artistes, song writers and producers.</h4>
                        <p className='text-[18px]'>We have a transparent structure ensuring that revenues<br />
                            made through content distribution get to these artistes,<br />
                            producers and songwriters as due them.
                            <br />We are a music company that is more artistic with extra<br />
                            support that ensures result for our signed talents.</p>
                        <button className='text-white bg-black' >Learn more</button>
                    </div>
                </div>

                <div className='mt-[100px] flex justify-center bg-black text-[white] p-10 w-full'>
                    <p>We have worked with some of the world’s smartest companies.</p>
                </div>

                <div className='mb-[100px] mt-[100px] justify-center w-full flex'>
                    <img src={homeimg11} alt="" />
                </div>
            </div>
        </>
    )
}

export default Wordfail
