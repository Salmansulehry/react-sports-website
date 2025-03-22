import React from 'react';
import postImage from '/images/post-img.png';
import zigZagImg1 from '/images/zig-zag-img.png';
import zigZagImg2 from '/images/zig-zag-img-2.png';

export const Content = () => {
  const post = {
    posts: [
      {
        image: postImage,
        title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
        detail:
          'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
        link: '',
      },
      {
        image: postImage,
        title: '2019 NATIONAL CHAMPIONS',
        detail: 'Membership has its perks.',
        link: '',
      },
      {
        image: postImage,
        title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
        detail:
          'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
        link: '',
      },
    ],
    zigZagPosts: [
      {
        image: zigZagImg1,
        title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
        detail:
          'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
      },
      {
        image: zigZagImg2,
        title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
        detail:
          'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
      },
    ],
  };

  return (
    <div className="Posts">
      <section className="post-container">
        {post.posts.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <div className="post-content">
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
            <p className="post-link">
              <a href={item.link}>READ MORE</a>
            </p>
          </div>
        ))}
      </section>
      <section className="zigzag-posts">
        {post.zigZagPosts.map((item, index) => (
          <div key={index} className={index % 2 !== 0 ? "odd-post" : ""}>
            <img src={item.image} />
            <div className="zigzag-content">
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
