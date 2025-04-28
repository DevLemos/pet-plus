import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './SocialMedia.module.css';
import Facebook from '../assets/facebook.svg?react';
import Instagram from '../assets/instagram.svg?react';
import Youtube from '../assets/youtube.svg?react';
import TikTok from '../assets/tiktok.svg?react';
import Whatsapp from '../assets/whatsapp.svg?react';

const SocialMedia = () => {
  return (
    <section>
      <div className={Styles['social-media-content']}>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Instagram />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <TikTok />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Facebook />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Youtube />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Whatsapp />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
