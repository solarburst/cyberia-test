import React from 'react';

interface IFile {
    file: File;
    onClick: () => void,
}

const File: React.FC<IFile> = ({ file, onClick }) => {
  return (
    <div className="file">
        <span className="file__name">{file.name}</span>
        <span className="file__size">
            {file.size < 1000000 ? `(${Math.round(file.size / 1024).toFixed(1)} КБ)` : `(${(Math.round(file.size / 1024) / 1000).toFixed(1)} МБ)` }
        </span>
        <button className="file__delete" onClick={onClick}>x</button>
    </div>
  )
}

export default File