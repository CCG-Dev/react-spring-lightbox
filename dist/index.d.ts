import React from 'react';
import type { ImagesList } from './types/ImagesList';
export type ImagesListType = ImagesList;
type ILightboxProps = {
    /** classnames are applied to the root lightbox component */
    className?: string;
    /** Index of image in images array that is currently shown */
    currentIndex: number;
    /** Overrides the default behavior of mousewheel */
    disableMouseWheel?: boolean;
    /** Array of images to be shown in Lightbox, each image object may contain any valid 'img' attribute with the exceptions of 'draggable', 'onClick', 'onDragStart' and 'ref' */
    images: ImagesList;
    /** Determines whether the Lightbox returns just an Inline carousel (ImageStage) */
    inline?: boolean;
    /** Flag that dictates if the lightbox is open or closed */
    isOpen: boolean;
    /** Function that closes the Lightbox */
    onClose?: () => void;
    /** Function that changes currentIndex to next image in images */
    onNext: () => void;
    /** Function that changes currentIndex to previous image in images */
    onPrev: () => void;
    /** React-Spring useTransition config for page open/close animation */
    pageTransitionConfig?: any;
    /** A React component that renders below the image pager */
    renderFooter?: () => React.ReactNode;
    /** A React component that renders above the image pager */
    renderHeader?: () => React.ReactNode;
    /** A React component that renders inside the image stage, useful for making overlays over the image */
    renderImageOverlay?: () => React.ReactNode;
    /** A React component that is used for next button in image pager */
    renderNextButton?: ({ canNext }: {
        canNext: boolean;
    }) => React.ReactNode;
    /** A React component that is used for previous button in image pager */
    renderPrevButton?: ({ canPrev }: {
        canPrev: boolean;
    }) => React.ReactNode;
    /** Overrides the default behavior of double clicking causing an image zoom to a single click */
    singleClickToZoom?: boolean;
    /** Inline styles that are applied to the root lightbox component */
    style?: React.CSSProperties;
};
/**
 * Gesture controlled lightbox that interpolates animations with spring physics.
 *
 * Demos and docs:
 * @see https://timellenberger.com/libraries/react-spring-lightbox
 *
 * GitHub repo:
 * @see https://github.com/tim-soft/react-spring-lightbox
 *
 * Built with:
 * @see https://github.com/react-spring/react-use-gesture
 * @see https://github.com/react-spring/react-spring
 * @see https://github.com/styled-components/styled-components
 */
declare const Lightbox: ({ className, currentIndex, disableMouseWheel, images, inline, isOpen, onClose, onNext, onPrev, pageTransitionConfig, renderFooter, renderHeader, renderImageOverlay, renderNextButton, renderPrevButton, singleClickToZoom, style, }: ILightboxProps) => React.JSX.Element;
export default Lightbox;
