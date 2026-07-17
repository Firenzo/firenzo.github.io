import { Data } from '@strapi/strapi';
import { mapImageData } from './index';
import { ImageData } from '../../types';
import { ProjectRaw } from '../api/page/services/project-page';

export type ContentBlockComponentUID = Extract<keyof typeof strapi.components, `content-blocks.${string}`>;
export type DynamicContent = ProjectRaw['content'];

export const getAllContentBlockComponentUIDs = (): ContentBlockComponentUID[] => {
  const allComponents = Object.keys(strapi.components) as ContentBlockComponentUID[];
  const contentBlockComponents = allComponents.filter((component): component is ContentBlockComponentUID => {
    return component.startsWith('content-blocks.');
  });

  return contentBlockComponents;
};

type ButtonComponentRaw = Data.Component<'content-blocks.button'>;
type ButtonComponent = Pick<ButtonComponentRaw['button'], 'displayText' | 'url' | 'iconPosition' | 'icon'>;

export const mapButton = (buttonComponent: ButtonComponentRaw): ButtonComponent => ({
  displayText: buttonComponent.button.displayText,
  url: buttonComponent.button.url,
  iconPosition: buttonComponent.button.iconPosition,
  icon: buttonComponent.button.icon,
});

type SingleMediaItemComponentRaw = Data.Component<'content-blocks.single-media-item'>;
type SingleMediaItemComponent = Pick<SingleMediaItemComponentRaw, 'showCaption'> & { image: ImageData };

export const mapSingleMediaItem = (
  singleMediaItemComponent: SingleMediaItemComponentRaw
): SingleMediaItemComponent => ({
  showCaption: singleMediaItemComponent.showCaption,
  image: mapImageData(singleMediaItemComponent.image),
});

type DualMediaItemsComponentRaw = Data.Component<'content-blocks.dual-media-items'>;
type DualMediaItemsComponent = { mappedItems: SingleMediaItemComponent[] };

export const mapDualMediaItems = (dualMediaItemsComponent: DualMediaItemsComponentRaw): DualMediaItemsComponent => ({
  mappedItems: dualMediaItemsComponent.mediaItem.map((mediaItem: SingleMediaItemComponentRaw) =>
    mapSingleMediaItem(mediaItem)
  ),
});

type ImageSliderComponentRaw = Data.Component<'content-blocks.image-slider'>;
type ImageSliderItemRaw = ImageSliderComponentRaw['imageSliderItems'][number];
type ImageSliderItem = Pick<ImageSliderItemRaw, 'title' | 'description' | 'additionalInfo'> & { image: ImageData };
type ImageSliderComponent = { imageSliderItems: ImageSliderItem[] };

export const mapImageSlider = (imageSliderComponent: ImageSliderComponentRaw): ImageSliderComponent => ({
  imageSliderItems: imageSliderComponent.imageSliderItems.map((imageSliderItem: ImageSliderItemRaw) => ({
    title: imageSliderItem.title,
    description: imageSliderItem.description,
    image: mapImageData(imageSliderItem.image),
    additionalInfo: imageSliderItem.additionalInfo,
  })),
});

type ScrollableImageComponentRaw = Data.Component<'content-blocks.scrollable-image'>;
type ScrollableImageComponent = Pick<ScrollableImageComponentRaw, 'title' | 'description'> & { image: ImageData };

export const mapScrollableImage = (
  scrollableImageComponent: ScrollableImageComponentRaw
): ScrollableImageComponent => ({
  title: scrollableImageComponent.title,
  description: scrollableImageComponent.description,
  image: mapImageData(scrollableImageComponent.image),
});

type RichTextComponentRaw = Data.Component<'content-blocks.rich-text'>;
type RichTextComponent = Pick<RichTextComponentRaw, 'content'>;

export const mapRichText = (richTextComponent: RichTextComponentRaw): RichTextComponent => ({
  content: richTextComponent.content,
});

type LottieAnimationComponentRaw = Data.Component<'content-blocks.lottie-animation'>;
type LottieAnimationComponent = Pick<LottieAnimationComponentRaw, 'caption' | 'background' | 'lottieJSON'>;

export const mapLottieAnimation = (
  lottieAnimationComponent: LottieAnimationComponentRaw
): LottieAnimationComponent => ({
  caption: lottieAnimationComponent.caption,
  background: lottieAnimationComponent.background,
  lottieJSON: lottieAnimationComponent.lottieJSON,
});

type ContentBlockRaw =
  | ({ __component: 'content-blocks.button' } & ButtonComponentRaw)
  | ({ __component: 'content-blocks.single-media-item' } & SingleMediaItemComponentRaw)
  | ({ __component: 'content-blocks.dual-media-items' } & DualMediaItemsComponentRaw)
  | ({ __component: 'content-blocks.image-slider' } & ImageSliderComponentRaw)
  | ({ __component: 'content-blocks.scrollable-image' } & ScrollableImageComponentRaw)
  | ({ __component: 'content-blocks.rich-text' } & RichTextComponentRaw)
  | ({ __component: 'content-blocks.lottie-animation' } & LottieAnimationComponentRaw);

export type ContentBlock =
  | ({ __component: 'content-blocks.button' } & ButtonComponent)
  | ({ __component: 'content-blocks.single-media-item' } & SingleMediaItemComponent)
  | ({ __component: 'content-blocks.dual-media-items' } & DualMediaItemsComponent)
  | ({ __component: 'content-blocks.image-slider' } & ImageSliderComponent)
  | ({ __component: 'content-blocks.scrollable-image' } & ScrollableImageComponent)
  | ({ __component: 'content-blocks.rich-text' } & RichTextComponent)
  | ({ __component: 'content-blocks.lottie-animation' } & LottieAnimationComponent);

export const mapContentBlocks = (contentBlocks: DynamicContent): ContentBlock[] => {
  const mappedContentBlocks = contentBlocks.map((contentBlock: ContentBlockRaw) => {
    switch (contentBlock.__component) {
      case 'content-blocks.button':
        return { __component: contentBlock.__component, ...mapButton(contentBlock) };
      case 'content-blocks.single-media-item':
        return { __component: contentBlock.__component, ...mapSingleMediaItem(contentBlock) };
      case 'content-blocks.dual-media-items':
        return { __component: contentBlock.__component, ...mapDualMediaItems(contentBlock) };
      case 'content-blocks.image-slider':
        return { __component: contentBlock.__component, ...mapImageSlider(contentBlock) };
      case 'content-blocks.scrollable-image':
        return { __component: contentBlock.__component, ...mapScrollableImage(contentBlock) };
      case 'content-blocks.rich-text':
        return { __component: contentBlock.__component, ...mapRichText(contentBlock) };
      case 'content-blocks.lottie-animation':
        return { __component: contentBlock.__component, ...mapLottieAnimation(contentBlock) };
      default: {
        const _exhaustive: never = contentBlock;
        return _exhaustive;
      }
    }
  });
  return mappedContentBlocks;
};
