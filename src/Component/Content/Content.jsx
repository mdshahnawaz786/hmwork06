import React from 'react'
import "./content.css"

const Content = () => {
  return (
    <div className='content'>
        <div className="leftContent">
            <p className='tagName'>Header</p>
            <p className='tagName'>Footer</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam quas inventore exercitationem omnis voluptas nemo explicabo eligendi dolores laudantium!</p>
        </div>
        <div className="rightContent">
            <img src="https://c4.wallpaperflare.com/wallpaper/738/1004/957/the-boss-baby-4k-wallpaper-preview.jpg" alt="" />
        </div>
    </div>
  )
}

export default Content