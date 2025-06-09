export const mapImageData = (image) => {
  const altText = image.alternativeText;
  const caption = image.caption;
  const formats = ['original', 'thumbnail', 'small', 'medium', 'large'];

  const availableFormats = formats.filter((imageFormat) => {
    if (imageFormat === 'original') {
      return true;
    }
    return image?.formats?.[imageFormat];
  });

  const mappedImages = availableFormats.reduce((acc: Record<string, Object>, imageFormat) => {
    if (imageFormat === 'original') {
      acc = {
        url: image.url,
        width: image.width,
        height: image.height,
        mime: image.mime,
      };

      if (image.ext === '.svg') {
        delete acc.width;
        delete acc.height;
      }
      return acc;
    }

    acc[imageFormat] = {
      url: image?.formats?.[imageFormat]?.url,
      width: image?.formats?.[imageFormat]?.width,
      height: image?.formats?.[imageFormat]?.height,
      mime: image?.formats?.[imageFormat]?.mime,
    };

    if (image.ext === '.svg') {
      delete image.formats[imageFormat].width;
      delete image.formats[imageFormat].height;
    }

    return acc;
  }, {});

  return { altText, caption, ...mappedImages };
};
