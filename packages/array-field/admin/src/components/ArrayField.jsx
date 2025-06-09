import React from 'react';
import { useEffect } from 'react';
import { MultiSelect, MultiSelectOption, Box, Typography } from '@strapi/design-system';

export const ArrayField = ({ name, value, onChange, attribute }) => {
  useEffect(() => {
    const allowedOptions = (optionsString || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const filteredValue = (value || []).filter((v) => allowedOptions.includes(v));

    if (JSON.stringify(filteredValue) !== JSON.stringify(value)) {
      onChange({ target: { name, value: filteredValue } });
    }
  }, []);

  const optionsString = attribute.options.options || '';
  const options = optionsString
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const handleChange = (selected) => {
    onChange({ target: { name, value: selected } });
  };

  return (
    <Box>
      <Typography variant="pi" fontWeight="bold" style={{ display: 'block', marginBottom: '1rem' }}>
        Select an option
      </Typography>

      <MultiSelect
        withTags={true}
        label="Choose"
        name={name}
        value={value || []}
        onChange={handleChange}
        placeholder="Select..."
      >
        {options.map((option) => {
          return (
            <MultiSelectOption key={option} value={option}>
              {option}
            </MultiSelectOption>
          );
        })}
      </MultiSelect>
    </Box>
  );
};

export default ArrayField;
