import React from 'react';
import type { ImagesList } from '../../types/ImagesList';
type IImageStageProps = {
    /** classnames are applied to the root ImageStage component */
    className?: string;
    /** Index of image in images array that is currently shown */
    currentIndex: number;
    /** Overrides the default behavior of mousewheel */
    disableMouseWheel?: boolean;
    /** Array of image objects to be shown in Lightbox */
    images: ImagesList;
    /** Affects Width calculation method, depending on whether the Lightbox is Inline or not */
    inline: boolean;
    /** A React component that is rendered when the image is loading */
    loadingComponent?: React.ReactNode;
    /** Function that closes the Lightbox */
    onClose?: () => void;
    /** Function that can be called to disable dragging in the pager */
    onNext: () => void;
    /** True if this image is currently shown in pager, otherwise false */
    onPrev: () => void;
    /** Callback function to update the zoom level in the parent ImagePager */
    onZoomLevelChange?: (zoomLevel: number) => void;
    /** A React component that renders inside the image stage, useful for making overlays over the image */
    renderImageOverlay: () => React.ReactNode;
    /** A React component that is used for next button in image pager */
    renderNextButton: ({ canNext }: {
        canNext: boolean;
    }) => React.ReactNode;
    /** A React component that is used for previous button in image pager */
    renderPrevButton: ({ canPrev }: {
        canPrev: boolean;
    }) => React.ReactNode;
    /** Show zoom icons on hover */
    showZoomIconsOnHover?: boolean;
    /** Overrides the default behavior of double clicking causing an image zoom to a single click */
    singleClickToZoom: boolean;
    /** Zoom level */
    zoomLevel?: number;
};
/**
 * Containing element for ImagePager and prev/next button controls
 */
declare const ImageStage: ({ className, currentIndex, disableMouseWheel, images, inline, loadingComponent, onClose, onNext, onPrev, onZoomLevelChange, renderImageOverlay, renderNextButton, renderPrevButton, showZoomIconsOnHover, singleClickToZoom, zoomLevel, }: IImageStageProps) => React.JSX.Element;
export default ImageStage;
