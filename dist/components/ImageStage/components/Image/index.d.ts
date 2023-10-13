import React from 'react';
import type { ImagesListItem } from '../../../../types/ImagesList';
type IImageProps = {
    /** Any valid <img /> props to pass to the lightbox img element ie src, alt, caption etc*/
    imgProps: ImagesListItem;
    /** Affects Width calculation method, depending on whether the Lightbox is Inline or not */
    inline: boolean;
    /** True if this image is currently shown in pager, otherwise false */
    isCurrentImage: boolean;
    /** Fixed height of the image stage, used to restrict maximum height of images */
    pagerHeight: '100%' | number;
    /** Indicates parent ImagePager is in a state of dragging, if true click to zoom is disabled */
    pagerIsDragging: boolean;
    /** Function that can be called to disable dragging in the pager */
    setDisableDrag: (disable: boolean) => void;
    /** Overrides the default behavior of double clicking causing an image zoom to a single click */
    singleClickToZoom: boolean;
};
/**
 * Animates pinch-zoom + panning on image using spring physics
 */
declare const Image: {
    ({ imgProps: { style: imgStyleProp, ...restImgProps }, inline, isCurrentImage, pagerHeight, pagerIsDragging, setDisableDrag, singleClickToZoom, }: IImageProps): React.JSX.Element;
    displayName: string;
};
export default Image;