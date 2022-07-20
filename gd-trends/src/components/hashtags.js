import React from 'react';
import '../styles/hashtags.css';

const coffeeHashtags = [
    "#nutellaicedcoffee",
    "#coffeetiktok",
    "#asmr",
    "#coffeetok",
    "#coffeeaddict",
    "#caffeine",
    "#satisfying"
]
const discoverHashtags = [
    "#ShowUrGrillSkillz",
    "#fyp",
    "#amazonfinds",
    "#Summer",
    "#FilmTeyvatIslands",
    "#SuperShow",
    "#couple"
]

function displayHashtags(hashtagList) {
    const hashtags = hashtagList.map(tag => {
        return <tr><td>{tag}</td></tr>
    });
    return <tbody>
        {hashtags}
    </tbody>
}

const Hashtags = (page) => {
    return (
        <div className='hashtag-container'>
            <table>
                <thead>
                    <tr>
                        <th>Trending Hashtags</th>
                    </tr>
                </thead>
                {page.page === "search" ? 
                    displayHashtags(coffeeHashtags) :
                    displayHashtags(discoverHashtags)
                }
            </table>
        </div>
    )
};

export default Hashtags;