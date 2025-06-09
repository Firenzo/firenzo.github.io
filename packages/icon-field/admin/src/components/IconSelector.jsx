import React, { useRef, useEffect } from 'react';
import { SingleSelect, SingleSelectOption, Box, Typography, Button } from '@strapi/design-system';
import { iconSizes, iconColors, iconSet, getIcon } from '@repo/iconset';
import { Icon } from '@repo/iconset/components';
import '@repo/iconset/icons.css';

export const IconSelector = ({ name, value, attribute, onChange }) => {
  console.log(attribute);
  const colorSelectorEnabled = attribute.options.addColorSelector;
  const sizeSelectorEnabled = attribute.options.addSizeSelector;

  let iconValue = {
    name: value?.name ?? '',
    size: value?.size ?? 24,
    color: value?.color ?? 'primary',
  };

  const updateValue = (newValue) => {
    iconValue = newValue;

    if (!sizeSelectorEnabled) {
      delete iconValue.size;
    }
    if (!colorSelectorEnabled) {
      delete iconValue.color;
    }

    onChange({ target: { name, value: iconValue } });
  };

  const listEl = useRef(null);

  const handleIconClick = (event) => {
    const currentListItem = event.currentTarget.querySelector('li');
    const listElement = listEl.current;
    const allListItems = Array.from(listElement.querySelectorAll('button li'));
    const otherElementSelected = allListItems.some((item) => {
      return item.closest('button').classList.contains('iconSelector__icon-option--selected');
    });

    // make sure only one icon can be selected at a time
    if (otherElementSelected) {
      const selectedElement = listElement.querySelector('.iconSelector__icon-option--selected');
      if (selectedElement !== currentListItem.closest('button')) {
        selectedElement.classList.remove('iconSelector__icon-option--selected');
        selectedElement.classList.add('iconSelector__icon-option');
        currentListItem.closest('button').classList.add('iconSelector__icon-option--selected');
        currentListItem.closest('button').classList.remove('iconSelector__icon-option');
      }
    } else {
      currentListItem.closest('button').classList.add('iconSelector__icon-option--selected');
      currentListItem.closest('button').classList.remove('iconSelector__icon-option');
    }

    // Get the name of the selected icon
    const selectedIcon = listElement.querySelector('.iconSelector__icon-option--selected i');
    const iconName = Array.from(selectedIcon.classList).find((classes) => classes.includes('ic-'));
    updateValue({ name: iconName, color: value?.color, size: value?.size });
  };

  const setSelectedIcon = (selectedIconName) => {
    const iconToBeSelected = listEl.current.querySelector(`.${selectedIconName}`);
    iconToBeSelected.closest('button').classList.add('iconSelector__icon-option--selected');
    iconToBeSelected.closest('button').classList.remove('iconSelector__icon-option');
    updateValue({ name: selectedIconName, color: value?.color, size: value?.size });
  };

  const handleColorChange = (newColor) => {
    updateValue({ name: value?.name, color: newColor, size: value?.size });
  };

  const handleSizeChange = (newSize) => {
    updateValue({ name: value?.name, color: value?.color, size: newSize });
  };

  const handleRemoveIcon = () => {
    const iconToBeDeselected = listEl.current.querySelector('.iconSelector__icon-option--selected');
    iconToBeDeselected.classList.add('iconSelector__icon-option');
    iconToBeDeselected.classList.remove('iconSelector__icon-option--selected');
    updateValue({ name: '', color: value?.color, size: value?.size });
  };

  useEffect(() => {
    if (value?.name) {
      setSelectedIcon(value.name);
    }

    const hoverIconStyle = `
      .iconSelector__icon-option:hover li {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid white !important;
        cursor: pointer;
      }

      .iconSelector__icon-option--selected li{
        background: rgba(0, 0, 0, 0.3);
        border: 3px solid #7b79ff !important;
      }
        `;

    // add hover style to document
    const style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = hoverIconStyle;
    } else {
      style.appendChild(document.createTextNode(hoverIconStyle));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
  }, []);

  return (
    <Box>
      <Typography variant="pi" fontWeight="bold" style={{ display: 'block', marginBottom: '1rem' }}>
        Select an Icon and its styling
      </Typography>
      <div className="test-class">
        <section
          id="#iconSelect"
          style={{
            borderRadius: '5px',
            padding: '1.5rem 0rem',
          }}
        >
          <Typography
            variant="pi"
            fontWeight="bold"
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Icon:
          </Typography>
          <div
            style={{
              padding: '1rem 1rem',
              background: 'rgba(0, 0, 0, 0.1)',
              border: '1px solid #ffffff44',
              borderRadius: '5px',
            }}
          >
            <ul
              ref={listEl}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                listStyle: 'none',
                gap: '1rem',
                height: '130px',
                overflow: 'auto',
              }}
            >
              {Object.keys(iconSet).map((iconName) => {
                return (
                  <button
                    key={iconName}
                    className="iconSelector__icon-option"
                    onClick={handleIconClick}
                  >
                    <li
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.17)',
                        borderRadius: '5px',
                        aspectRatio: '1/1',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                      }}
                    >
                      <Icon icon={getIcon(iconName)} color="white" size={24} />
                    </li>
                  </button>
                );
              })}
            </ul>
          </div>
        </section>
        <section
          id="#sizeAndColor"
          style={{
            borderRadius: '5px',
            padding:
              !sizeSelectorEnabled && !colorSelectorEnabled ? '0 0 1rem' : '1.5rem 0rem 1rem',
            marginTop: !sizeSelectorEnabled && !colorSelectorEnabled ? '0rem' : '1.5rem',
          }}
        >
          {attribute.options.addColorSelector && (
            <div className="color-select">
              <Typography
                variant="pi"
                fontWeight="bold"
                style={{ display: 'block', marginBottom: '1rem', marginLeft: '1rem' }}
              >
                Color:
              </Typography>

              <SingleSelect
                label="color"
                name="icon-color"
                value={value?.color ?? 'primary'}
                onChange={handleColorChange}
                placeholder="Select color..."
                disabled={!iconValue.name}
              >
                {iconColors.map((iconColor) => {
                  return (
                    <SingleSelectOption key={iconColor} value={iconColor}>
                      {iconColor}
                    </SingleSelectOption>
                  );
                })}
              </SingleSelect>
            </div>
          )}

          {attribute.options.addSizeSelector && (
            <div className="size-select" style={{ marginTop: '2rem' }}>
              <Typography
                variant="pi"
                fontWeight="bold"
                style={{ display: 'block', marginBottom: '1rem', marginLeft: '1rem' }}
              >
                Size:
              </Typography>
              <SingleSelect
                label="size"
                name="icon-size"
                value={value?.size ?? 24}
                onChange={handleSizeChange}
                placeholder="Select size..."
                disabled={!iconValue.name}
              >
                {iconSizes.map((iconSize) => {
                  return (
                    <SingleSelectOption key={iconSize} value={iconSize}>
                      {iconSize}px
                    </SingleSelectOption>
                  );
                })}
              </SingleSelect>
            </div>
          )}
          <Button
            style={{
              marginTop: !sizeSelectorEnabled && !colorSelectorEnabled ? '0 0 1rem' : '2rem',
            }}
            variant="danger-light"
            onClick={handleRemoveIcon}
            disabled={!iconValue.name}
          >
            Remove Icon
          </Button>
        </section>
      </div>
    </Box>
  );
};

export default IconSelector;
