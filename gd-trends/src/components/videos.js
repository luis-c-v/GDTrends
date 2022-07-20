import React from 'react';
import '../styles/videos.css';
import { TikTok } from "react-tiktok";

const coffeeVideoList = [
    "https://www.tiktok.com/@kaelimaee/video/7068433311571529007",
    "https://www.tiktok.com/@maddy_lee_ann/video/7078677519527906602",
    "https://www.tiktok.com/@caffeinication/video/7026052196781460782",
    "https://www.tiktok.com/@amberlyrecendez/video/7069124829986999598",
    "https://www.tiktok.com/@byrosielouise/video/7076170664507395334",
    "https://www.tiktok.com/@pao_newyorkcity/video/7046182366657727750"
]

const discoverVideoList = [
    "https://www.tiktok.com/@luke.kidgell/video/7114934766201359617",
    "https://www.tiktok.com/@its.meagan.elizabeth/video/7104874805559823662",
    "https://www.tiktok.com/@larrayeeee/video/7118423543930670382",
    "https://www.tiktok.com/@unlimitededits/video/7111054021640703237",
    "https://www.tiktok.com/@chloeranshaw/video/7121917181801024810",
    "https://www.tiktok.com/@muhtanya/video/7121479819380002094"
]

function displayTikToks(videoList) {
    const vids = videoList.map(url => {
        return <TikTok url={url} />
    });
    return <div className='display-container'>
        {vids}
    </div>
}

const Videos = (page) => {
    return (
        <div>
            <div className='video-container'>
                <div className='title'>
                    Video Content
                </div>
                {page.page === "search" ? 
                    displayTikToks(coffeeVideoList) :
                    displayTikToks(discoverVideoList)
                }
            </div>
        </div>
    )
}

export default Videos