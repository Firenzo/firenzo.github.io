import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['Primary', 'White', 'Black']> & Schema.Attribute.DefaultTo<'White'>;
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::icon-field.icon',
        {
          addColorSelector: false;
          addSizeSelector: false;
        }
      >;
    iconPosition: Schema.Attribute.Enumeration<['Left', 'Right']> & Schema.Attribute.DefaultTo<'Left'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_common_link_cards';
  info: {
    displayName: 'Link Card';
    icon: 'link';
  };
  attributes: {
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::icon-field.icon',
        {
          addColorSelector: false;
          addSizeSelector: false;
        }
      >;
    iconPosition: Schema.Attribute.Enumeration<['Left', 'Right']> & Schema.Attribute.DefaultTo<'Left'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonLinkTile extends Struct.ComponentSchema {
  collectionName: 'components_common_link_tiles';
  info: {
    displayName: 'Link Tile';
    icon: 'link';
  };
  attributes: {
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::icon-field.icon',
        {
          addColorSelector: false;
          addSizeSelector: false;
        }
      >;
    iconPosition: Schema.Attribute.Enumeration<['Left', 'Right']> & Schema.Attribute.DefaultTo<'Left'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBlocksButton extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface ContentBlocksDualMediaItems extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_dual_media_items';
  info: {
    displayName: 'Dual media items';
    icon: 'television';
  };
  attributes: {
    mediaItem: Schema.Attribute.Component<'content-blocks.single-media-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
  };
}

export interface ContentBlocksImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_image_sliders';
  info: {
    displayName: 'Image slider';
    icon: 'picture';
  };
  attributes: {
    imageSliderItems: Schema.Attribute.Component<'content-blocks.image-slider-item', true>;
  };
}

export interface ContentBlocksImageSliderItem extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_image_slider_items';
  info: {
    displayName: 'Image slider item';
    icon: 'picture';
  };
  attributes: {
    additionalInfo: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    identifier: Schema.Attribute.String & Schema.Attribute.Unique;
    image: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksLottieAnimation extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_lottie_animations';
  info: {
    displayName: 'Lottie animation';
    icon: 'star';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['Light', 'Dark']> & Schema.Attribute.DefaultTo<'Dark'>;
    caption: Schema.Attribute.String;
    lottieJSON: Schema.Attribute.JSON & Schema.Attribute.CustomField<'plugin::json-file-field.json-file'>;
  };
}

export interface ContentBlocksMediaPresenter extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_media_presenters';
  info: {
    displayName: 'Media Presenter';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    scrollable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'underline';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ContentBlocksSingleMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_single_media_items';
  info: {
    displayName: 'Single media item';
    icon: 'television';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reduceMarginBottom: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    reduceMaxWidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showCaption: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'common.link-card': CommonLinkCard;
      'common.link-tile': CommonLinkTile;
      'content-blocks.button': ContentBlocksButton;
      'content-blocks.dual-media-items': ContentBlocksDualMediaItems;
      'content-blocks.image-slider': ContentBlocksImageSlider;
      'content-blocks.image-slider-item': ContentBlocksImageSliderItem;
      'content-blocks.lottie-animation': ContentBlocksLottieAnimation;
      'content-blocks.media-presenter': ContentBlocksMediaPresenter;
      'content-blocks.rich-text': ContentBlocksRichText;
      'content-blocks.single-media-item': ContentBlocksSingleMediaItem;
    }
  }
}
