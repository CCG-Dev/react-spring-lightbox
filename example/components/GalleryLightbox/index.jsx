import React from 'react';

import Color from 'color';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-spring-lightbox';
import styled from 'styled-components';

import GridImage from './components/GridImage';
import LightboxArrowButton from './components/LightboxArrowButton';
import LightboxHeader from './components/LightboxHeader';

class BlogImageGallery extends React.Component {
    static propTypes = {
        galleryTitle: PropTypes.string.isRequired,
        imageMasonryDirection: PropTypes.oneOf(['column', 'row']),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                alt: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired,
                height: PropTypes.number,
                src: PropTypes.string.isRequired,
                width: PropTypes.number,
            }),
        ).isRequired,
    };

    static defaultProps = {
        imageMasonryDirection: 'column',
    };

    constructor() {
        super();

        this.state = {
            clientSide: false,
            currentImageIndex: 0,
            lightboxIsOpen: false,
            zoomLevel: 1,
        };
    }

    componentDidMount() {
        this.setState({ clientSide: true });
    }

    openLightbox = (e, { index }) => {
        this.setState({
            currentImageIndex: index,
            lightboxIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            lightboxIsOpen: false,
        });
        this.setState({ zoomLevel: 1 });
    };

    gotoPrevious = () => {
        const { currentImageIndex } = this.state;

        this.setState({ zoomLevel: 1 });

        // If the current image isn't the first in the list, go to the previous
        if (currentImageIndex > 0) {
            this.setState({
                currentImageIndex: currentImageIndex - 1,
            });
        }
    };

    gotoNext = () => {
        const { images } = this.props;
        const { currentImageIndex } = this.state;

        this.setState({ zoomLevel: 1 });

        // If the current image isn't the list in the list, go to the next
        if (currentImageIndex + 1 < images.length) {
            this.setState({
                currentImageIndex: currentImageIndex + 1,
            });
        }
    };

    onZoomChange = (zoomLevel) => {
        this.setState({ zoomLevel });
    };

    /**
     * Sets breakpoints for column width based on containerWidth
     *
     * @int containerWidth The current width of the image grid
     */
    columnConfig = (containerWidth) => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;

        return columns;
    };

    render() {
        const { clientSide, currentImageIndex, lightboxIsOpen } = this.state;
        const { galleryTitle, imageMasonryDirection, images } = this.props;

        // remove the height and width props for the lightbox images array
        const listboxImages = [...images].map((image) => {
            const newImage = { ...image };
            delete newImage.height;
            delete newImage.width;

            return newImage;
        });

        const handleZoomIn = () => {
            this.setState({ zoomLevel: this.state.zoomLevel + 0.5 });
        };

        const handleZoomOut = () => {
            this.setState({ zoomLevel: this.state.zoomLevel - 0.5 });
        };

        const onChangeZoom = (zoomLevel) => {
            this.setState({ zoomLevel });
        };
        return (
            <GalleryContainer>
                {clientSide && (
                    <Gallery
                        columns={this.columnConfig}
                        direction={imageMasonryDirection}
                        margin={6}
                        onClick={this.openLightbox}
                        photos={images}
                        renderImage={GridImage}
                    />
                )}
                <StyledLightbox
                    currentIndex={currentImageIndex}
                    disableMouseWheel={true}
                    galleryTitle={galleryTitle}
                    images={listboxImages}
                    isOpen={lightboxIsOpen}
                    onClose={this.closeLightbox}
                    onNext={this.gotoNext}
                    onPrev={this.gotoPrevious}
                    onZoomLevelChange={onChangeZoom}
                    renderHeader={() => (
                        <LightboxHeader
                            currentIndex={currentImageIndex}
                            galleryTitle={galleryTitle}
                            images={images}
                            onClose={this.closeLightbox}
                            onZoomIn={handleZoomIn}
                            onZoomOut={handleZoomOut}
                            zoomLevel={this.state.zoomLevel}
                        />
                    )}
                    renderNextButton={({ canNext }) => (
                        <LightboxArrowButton
                            disabled={!canNext}
                            onClick={this.gotoNext}
                            position="right"
                        />
                    )}
                    renderPrevButton={({ canPrev }) => (
                        <LightboxArrowButton
                            disabled={!canPrev}
                            onClick={this.gotoPrevious}
                            position="left"
                        />
                    )}
                    showZoomIconsOnHover={true}
                    singleClickToZoom
                    zoomLevel={this.state.zoomLevel}
                />
            </GalleryContainer>
        );
    }
}

export default BlogImageGallery;

const GalleryContainer = styled.div`
    overflow-y: auto;
    max-height: calc(100% - 4em);
    padding: 2em;
`;

const StyledLightbox = styled(Lightbox)`
    background: ${({ theme }) =>
        Color(theme.accentColor).alpha(0.95).hsl().string()};
    * ::selection {
        background: ${({ theme }) => theme.pageContentSelectionColor};
    }
    * ::-moz-selection {
        background: ${({ theme }) =>
            new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
    border: ${({ theme }) => theme.pageContentSelectionColor} 1px solid;
    background: rgba(39, 39, 39, 0.5);
    p {
        color: ${({ theme }) => theme.pageContentSelectionColor};
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin: 0.5em 0;
    }
    svg {
        border: white 1px solid;
        fill: ${({ theme }) => theme.pageContentSelectionColor};
        margin: 10px;
        padding: 5px;
        :hover {
            border: ${({ theme }) => theme.pageContentSelectionColor} 1px solid;
            fill: ${({ theme }) =>
                new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
            cursor: pointer;
        }
    }
`;
