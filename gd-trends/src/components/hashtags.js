import React from 'react';
import '../styles/hashtags.css';

// const hashtags = []

const Hashtags = () => {
    return (
        <div className='hashtag-container'>
            <table>
                <thead>
                    <tr>
                        <th>Trending Hashtags</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {hashtags.map((tag) => (
                        <tr><td>{tag.name}</td></tr>
                    ))} */}
                    <tr><td>#cheessy</td></tr>
                    <tr><td>#butterbread</td></tr>
                    <tr><td>#garlic</td></tr>
                    <tr><td>#block</td></tr>
                </tbody>
            </table>
        </div>
    )
};

export default Hashtags;