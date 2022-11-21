import { FC } from 'react';

export interface HeaderProps {
  profile: {
    image: string;
    name: string;
    description: string;
  } | undefined;
  lightMode: boolean;
  toggleLightMode: () => void;
}

export const Header: FC<HeaderProps> = ({ profile, lightMode, toggleLightMode }) => {
  return (
    <header>
      {profile && (
        <div className="profile">
          <img src={profile.image} alt="profile" />
          <h1>{profile.name}</h1>
          <p>{profile.description}</p>
        </div>
      )}
      <div className="light-mode">
        <i className="fas fa-moon"></i>
        <input
          type="checkbox"
          id="light-mode"
          checked={lightMode}
          onChange={toggleLightMode}
        />
        <label htmlFor="light-mode"></label>
        <i className="fas fa-sun"></i>
      </div>
    </header>
  );
};