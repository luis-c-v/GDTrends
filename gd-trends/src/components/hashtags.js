import React from 'react';
import '.../styles/hashtags.css';

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
                        <td>{tag.name}</td>
                    ))} */}
                    <td>cheessy</td>
                </tbody>
            </table>
        </div>
    )
};

export default Hashtags;