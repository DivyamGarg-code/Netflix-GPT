import React, { useState } from 'react';

const EditableDiv = () => {
  const [content, setContent] = useState('Click to edit me');

  const handleContentChange = (e) => {
    setContent(e.target.textContent);
  };

  return (
    <div
      contentEditable={true}
      onBlur={handleContentChange}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ border: '1px solid #ccc', padding: '8px' }}
    />
  );
};

export default EditableDiv;
