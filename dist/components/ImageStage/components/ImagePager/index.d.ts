import React from 'react';
import type { ImagesList } from '../../../../types/ImagesList';
type IImagePager = {
    /** Index of image in images array that is currently shown */
    currentIndex: number;
    /** Overrides the default behavior of mousewheel */
    disableMouseWheel?: boolean;
    /** image stage height */
    imageStageHeight: number;
    /** image stage width */
    imageStageWidth: number;
    /** Array of image objects to be shown in Lightbox */
    images: ImagesList;
    /** Affects Width calculation method, depending on whether the Lightbox is Inline or not */
    inline: boolean;
    /** Function that closes the Lightbox */
    onClose?: () => void;
    /** Function that can be called to disable dragging in the pager */
    onNext: () => void;
    /** True if this image is currently shown in pager, otherwise false */
    onPrev: () => void;
    /** A React component that renders inside the image stage, useful for making overlays over the image */
    renderImageOverlay: () => React.ReactNode;
    /** Overrides the default behavior of double clicking causing an image zoom to a single click */
    singleClickToZoom: boolean;
};
/**
 * Gesture controlled surface that animates prev/next page changes via spring physics.
 */
declare const ImagePager: {
    ({ currentIndex, disableMouseWheel, images, imageStageHeight, imageStageWidth, inline, onClose, onNext, onPrev, renderImageOverlay, singleClickToZoom, }: IImagePager): React.JSX.Element;
    displayName: string;
};
export default ImagePager;