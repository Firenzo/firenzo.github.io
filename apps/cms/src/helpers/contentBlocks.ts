import { mapImageData } from './index';

export const getAllContentBlockComponentsNames = () => {
  const allComponents = Object.keys(strapi.components);
  const contentBlockComponents = allComponents.filter((component) => {
    return component.startsWith('content-blocks.');
  });
  return contentBlockComponents;
};

export const mapButton = (buttonComponent) => ({
  displayText: buttonComponent.button.displayText,
  url: buttonComponent.button.url,
  iconPosition: buttonComponent.button.iconPosition,
  icon: buttonComponent.button.icon,
});

export const mapSingleMediaItem = (singleMediaItemComponent) => ({
  showCaption: singleMediaItemComponent.showCaption,
  image: mapImageData(singleMediaItemComponent.image),
});

export const mapDualMediaItems = (dualMediaItemsComponent) => ({
  mappedItems: dualMediaItemsComponent.mediaItem.map((mediaItem) => mapSingleMediaItem(mediaItem)),
});

export const mapImageSlider = (imageSliderComponent) => ({
  imageSliderItems: imageSliderComponent.imageSliderItems.map((imageSliderItem) => ({
    title: imageSliderItem.title,
    description: imageSliderItem.description,
    image: mapImageData(imageSliderItem.image),
    additionalInfo: imageSliderItem.additionalInfo,
  })),
});

export const mapScrollableImage = (scrollableImageComponent) => ({
  title: scrollableImageComponent.title,
  description: scrollableImageComponent.description,
  image: mapImageData(scrollableImageComponent.image),
});

export const mapRichText = (richTextComponent) => ({
  content: richTextComponent.content,
});

export const mapLottieAnimation = (lottieAnimationComponent) => ({
  caption: lottieAnimationComponent.caption,
  background: lottieAnimationComponent.background,
  lottieJSON: lottieAnimationComponent.lottieJSON,
});

export const mapContentBlocks = (contentBlocks) => {
  const mappedContentBlocks = contentBlocks.map((contentBlock) => {
    const baseData = { __component: contentBlock.__component };

    switch (contentBlock.__component) {
      case 'content-blocks.button':
        return { ...baseData, ...mapButton(contentBlock) };
      case 'content-blocks.single-media-item':
        return { ...baseData, ...mapSingleMediaItem(contentBlock) };
      case 'content-blocks.dual-media-items':
        return { ...baseData, ...mapDualMediaItems(contentBlock) };
      case 'content-blocks.image-slider':
        return { ...baseData, ...mapImageSlider(contentBlock) };
      case 'content-blocks.scrollable-image':
        return { ...baseData, ...mapScrollableImage(contentBlock) };
      case 'content-blocks.rich-text':
        return { ...baseData, ...mapRichText(contentBlock) };
      case 'content-blocks.lottie-animation':
        return { ...baseData, ...mapLottieAnimation(contentBlock) };
      default:
        return contentBlock;
    }
  });
  return mappedContentBlocks;
};
