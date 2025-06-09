import React, { useRef } from 'react';
import { Box, Typography, Button } from '@strapi/design-system';

export const JsonFileInput = ({ name, value, onChange }) => {
  const fileInputRef = useRef();

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/json') return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        onChange({ target: { name, value: parsed } });
      } catch (err) {
        console.error(err);
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const handleRemove = () => {
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange({ target: { name, value: null } });
  };

  return (
    <Box>
      <Typography variant="pi" fontWeight="bold" display="block">
        Select JSON File
      </Typography>

      {value && (
        <Box paddingTop={3}>
          <pre
            style={{
              fontSize: '12px',
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 10,
              marginTop: '1rem',
            }}
          >
            {JSON.stringify(value, null, 2)}
          </pre>
        </Box>
      )}

      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <Button onClick={handleFileButtonClick} size="S" style={{ marginRight: '1.2rem' }}>
          Select JSON File
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        {value && (
          <Button onClick={handleRemove} variant="danger-light" size="S">
            Remove File
          </Button>
        )}
      </div>
    </Box>
  );
};

export default JsonFileInput;
