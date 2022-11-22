import { FC } from 'react';

export interface FooterProps {
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  privacyPolicy: string;
  year: number;
}

export const Footer: FC<FooterProps> = ({ socialMedia, privacyPolicy, year }) => {
  return (
    <footer>
      <div className="social-media">
        <a href={socialMedia.facebook}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={socialMedia.twitter}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href={socialMedia.instagram}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <a href={privacyPolicy}>Privacy Policy</a>
      <p>&copy; {year}</p>
    </footer>
  );
};