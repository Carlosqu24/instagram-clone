import React from 'react'

const postsList = [{
    id: 1,
    imageURL: "https://img.remediosdigitales.com/550d6a/maserati-ghibli-hybrid-2021-prueba_2728/840_560.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur labore omnis ratione blanditiis nam quis voluptas aliquam quo eos!",
    totalLikes: 23,
    username: "programador.x",
    profileImageUrl: "https://img.remediosdigitales.com/550d6a/maserati-ghibli-hybrid-2021-prueba_2728/840_560.jpeg"
}, {
    id: 2,
    imageURL: "data:image/jpeg;base64,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",
    description: "Awesome description",
    totalLikes: 424,
    username: "nasa",
    profileImageUrl: "https://img.remediosdigitales.com/550d6a/maserati-ghibli-hybrid-2021-prueba_2728/840_560.jpeg"
}, {
    id: 3,
    imageURL: "data:image/jpeg;base64,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",
    description: "Awesome description",
    totalLikes: 455,
    username: "jstatham",
    profileImageUrl: "https://img.remediosdigitales.com/550d6a/maserati-ghibli-hybrid-2021-prueba_2728/840_560.jpeg"
}]


const PostsList = () => {
    return (
        <ul
            className='w-[630px] flex flex-col items-center justify-center m-auto'
        >

            {
                postsList.map(post => (
                    <div className="card mb-9" style={{ width: "470px" }}>
                        <div className='card-header flex justify-between' style={{ marginBottom: "12px" }}>
                            <div className='flex justify-between items-center'>
                                <img className='rounded-full' src={post.profileImageUrl} style={{ width: "45px", height: "45px" }} alt="" />
                                <span className='ml-3 font-bold'>{post.username}</span>
                                <span className='ml-2'>5h</span>
                            </div>
                            <div>...</div>
                        </div>
                        <img
                            src={post.imageURL}
                            className="card-img-top"
                            style={{ width: "470px", height: "470px", objectFit: "cover" }}
                            alt="..."
                        />
                        <div className="card-body">
                            <div className='flex justify-between items-center pt-2 pb-1'>
                                <div className='flex justify-between items-center'>
                                    <span style={{ fontSize: "26px" }} className="material-symbols-outlined">
                                        favorite
                                    </span>
                                    <span style={{ fontSize: "26px" }} className="material-symbols-outlined ml-1">
                                        chat_bubble
                                    </span>
                                    <span style={{ fontSize: "26px" }} className="material-symbols-outlined ml-1">
                                        send
                                    </span>
                                </div>

                                <span style={{ fontSize: "26px" }} className="material-symbols-outlined ml-1">
                                    bookmarks
                                </span>
                            </div>
                            <div>
                                <p className='font-bold'>18 likes</p>
                                <span className='font-bold'>{post.username}</span>
                                <span className='ml-1'>{
                                    post.description.length > 75
                                        ? `${post.description.slice(0, 75)}...`
                                        : post.description
                                }</span>
                                <p className='font-bold'>See translation</p>
                            </div>


                            <div className='flex justify-between items-center'>
                                <input
                                    type="text"
                                    placeholder='Add a description...'
                                    className='outline-none'
                                />
                                <span style={{ fontSize: "18px" }} className="material-symbols-outlined">
                                    mood
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* <li>
          <div className="card" style={{height: "725px"}}>
            <img 
              src="https://img.remediosdigitales.com/550d6a/maserati-ghibli-hybrid-2021-prueba_2728/840_560.jpeg"
              className="card-img-top" 
              style={{ width: "470px", height: "470px", objectFit: "cover"}}
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </li>
        <li>
            <div className="card">
            <img 
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" 
              className="card-img-top" 
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </li>
        <li>
            <div className="card">
            <img 
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" 
              className="card-img-top" 
              alt="..." 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </li> */}
        </ul>
    )
}

export default PostsList