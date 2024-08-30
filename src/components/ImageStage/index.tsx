import React from 'react';

import styled from 'styled-components';

import type { ImagesList } from '../../types/ImagesList';
import ImagePager from './components/ImagePager';
import SSRImagePager from './components/SSRImagePager/SSRImagePager';
import useRefSize from './utils/useRefSize';

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
    renderNextButton: ({ canNext }: { canNext: boolean }) => React.ReactNode;
    /** A React component that is used for previous button in image pager */
    renderPrevButton: ({ canPrev }: { canPrev: boolean }) => React.ReactNode;
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
const ImageStage = ({
    className = '',
    currentIndex,
    disableMouseWheel,
    images,
    inline,
    loadingComponent,
    onClose,
    onNext,
    onPrev,
    onZoomLevelChange,
    renderImageOverlay,
    renderNextButton,
    renderPrevButton,
    showZoomIconsOnHover,
    singleClickToZoom,
    zoomLevel,
}: IImageStageProps) => {
    // Extra sanity check that the next/prev image exists before moving to it
    const canPrev = currentIndex > 0;
    const canNext = currentIndex + 1 < images.length;

    const onNextImage = canNext
        ? () => {
              onZoomLevelChange && onZoomLevelChange(1);
              onNext?.();
          }
        : () => null;
    const onPrevImage = canPrev
        ? () => {
              onZoomLevelChange && onZoomLevelChange(1);
              onPrev?.();
          }
        : () => null;
    const onCloseImage = () => {
        onZoomLevelChange && onZoomLevelChange(1);
        onClose?.();
    };

    const [{ height: containerHeight, width: containerWidth }, containerRef] =
        useRefSize();

    return (
        <ImageStageContainer
            className={className}
            data-testid="lightbox-image-stage"
            ref={containerRef}
        >
            {renderPrevButton({ canPrev })}
            {containerWidth ? (
                <ImagePager
                    currentIndex={currentIndex}
                    disableMouseWheel={disableMouseWheel}
                    images={images}
                    imageStageHeight={containerHeight}
                    imageStageWidth={containerWidth}
                    inline={inline}
                    loadingComponent={loadingComponent}
                    onClose={onCloseImage}
                    onNext={onNextImage}
                    onPrev={onPrevImage}
                    onZoomLevelChange={onZoomLevelChange}
                    renderImageOverlay={renderImageOverlay}
                    showZoomIconsOnHover={showZoomIconsOnHover}
                    singleClickToZoom={singleClickToZoom}
                    zoomLevel={zoomLevel}
                />
            ) : inline ? (
                <SSRImagePager currentIndex={currentIndex} images={images} />
            ) : null}
            {renderNextButton({ canNext })}
        </ImageStageContainer>
    );
};

export default ImageStage;

const ImageStageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
