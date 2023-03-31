import React from 'react'
import set from "../assets/headset.svg"
import homeimg1 from "../assets/homeimage1.svg"
import homeimg2 from "../assets/homeimage2.svg"
import homeimg3 from "../assets/homeimage3.svg"
import homeimg4 from "../assets/homeimage4.svg"
import homeimg11 from "../assets/homeimage11.svg"

const Wordfail = () => {
    return (
        <div>
            <div>
                <div>
                    <h4>When words fail,<span>Music</span> speaks.</h4>
                    <p>This is the home of music!</p>
                    <button>Book an artiste.</button>
                </div>
                <div>
                    <img src={set} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <h4>We are home to the very best talents & artistes, leading the  music industry.</h4>
                    <p>Mocking by Jay has maintained a strong and innovative push to promote capacity
                        building and creativity that showcase the richness and diversity of the Music
                        culture via story-telling.</p>
                    <button>Learn more</button>
                </div>
                <div>
                    <img src={homeimg1} alt="" />
                    <img src={homeimg2} alt="" />
                    <img src={homeimg3} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <img src={homeimg4} alt="" />
                </div>
                <div>
                    <h4>We license, distribute and publish rich musiccal
                        content for artistes, song writers and producers.</h4>
                    <p>We have a transparent structure ensuring that revenues
                        made through content distribution get to these artistes,
                        producers and songwriters as due them.
                        We are a music company that is more artistic with extra
                        support that ensures result for our signed talents.</p>
                    <button>Learn more</button>
                </div>
            </div>

            <div>
                <p>We have worked with some of the world’s smartest companies.</p>
            </div>

            <div>
                <img src={homeimg11} alt="" />
            </div>
        </div>
    )
}

export default Wordfail
