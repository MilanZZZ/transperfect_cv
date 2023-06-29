import React from "react";

interface TextPageProps {
  title?: string;
  date?: string;
  chunkTitle?: string;
  chunkSubtitle?: string;
  chunkText?: string;
  chunkLink?: string;
  locationText?: string;
}

const TextPage: React.FC<TextPageProps> = ({
  title,
  date,
  chunkTitle,
  chunkSubtitle,
  chunkText,
  chunkLink,
  locationText,
}) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="text_container">
        <p className="date">{date}</p>
        <div className="main_chunk">
          <h2 className="chunk_title">{chunkTitle}</h2>
          <p className="chunk_subtitle">{chunkSubtitle}</p>
          <p className="chunk_text">{chunkText}</p>
          <a className="chunk_link" href={chunkLink}>
            {chunkLink}
          </a>
        </div>
        <p className="location_text">{locationText}</p>
      </div>
    </div>
  );
};

export default TextPage;
