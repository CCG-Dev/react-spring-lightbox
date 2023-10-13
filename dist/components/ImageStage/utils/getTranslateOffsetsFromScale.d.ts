/// <reference types="react" />
type IGetTranslateOffsetsFromScale = {
    /** The current [x,y] translate values of image */
    currentTranslate: [translateX: number, translateY: number];
    /** The image dom node used as a reference to calculate translate offsets */
    imageRef: React.RefObject<HTMLImageElement>;
    /** The amount of change in the new transform scale */
    pinchDelta: number;
    /** The current transform scale of image */
    scale: number;
    /** The [x,y] coordinates of the zoom origin */
    touchOrigin: [touchOriginX: number, touchOriginY: number];
};
type ITranslateOffsetsReturnType = [translateX: number, translateY: number];
/**
 * Calculates the the translate(x,y) coordinates needed to zoom-in
 * to a point in an image.
 *
 * @returns {array} The next [x,y] translate values to apply to image
 */
declare const getTranslateOffsetsFromScale: ({ currentTranslate: [translateX, translateY], imageRef, pinchDelta, scale, touchOrigin: [touchOriginX, touchOriginY], }: IGetTranslateOffsetsFromScale) => ITranslateOffsetsReturnType;
export default getTranslateOffsetsFromScale;