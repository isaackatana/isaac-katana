import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog'
import { useParams } from 'react-router-dom';

function PostContainer() {
    const { slug} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`/api/posts/${slug}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Post not found');
            }
        })
        .then((data) => {
            setPost(data);
            document.title = data.title; // Update the document title to the post title
        })
        .catch((error) => console.error('Error fetching post:', error));
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric' 
    };
  return (
    <>
    <Helmet>
        <title>{post.slug}</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:image" content="" />
    </Helmet>
    <div className="post-container">
        <div>
            <h1>{post.title}</h1>
            <p>{new Date(post.dateCreated).toLocaleString('en-KE', options)}</p>
        </div>
        <img src={post.thumbnail} alt="" />
        <p>{post.content}</p>
        <iframe src={post.video} frame-border='0'></iframe>
    </div>
    <section>
        <div className='user-opinion'>
            <div className='share-on'>
                <h4>Share</h4>
                <div>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faXTwitter}/>
                </div>
            </div>
        </div>
        <div className='wrapper'>
            <div className='leave-a-comment'>
                <div className="comment-input">
                    <form action="">
                        <textarea name="" id="" placeholder='Leave a comment'></textarea>
                        <div>
                            <button>Post</button>
                        </div>
                    </form>
                </div>
                <div className="comment-display">
                    {/* <div className="comment">
                        <div className="profile-pic">
                            <img src="" alt="" />
                        </div>
                        <div className='user-comment'>
                            <h4>User</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officia!</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <Blog/>
    </>
  )
}

export default PostContainer