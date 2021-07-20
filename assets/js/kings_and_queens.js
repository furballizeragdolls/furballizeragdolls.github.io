const galleryConfig = {
    galleryMosaic : [
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 }
    ],
    galleryMosaicXS : [
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 }
    ],
    galleryMosaicSM : [
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 }
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    gallerySorting: 'thumbnailDisplayOrder',

    thumbnailHeight: '280',
    thumbnailWidth: '280',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 0,
    thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools: {
        topLeft: 'pageCounter',
        topRight: 'rotateLeft, rotateRight, fullscreenButton, closeButton'
    },

    // GALLERY THEME
    viewerTheme : {
        background: 'rgba(4, 4, 4, 0.9)'
    },
    // DEEP LINKING
    locationHash: true
}

jQuery(document).ready(function () {
    const leoGalleryItems = [{ src: '/assets/img/leo-profile.jpg', srct: '/assets/img/leo-profile.jpg'}];
    for (const i of Array(9).keys()) {
        imagePath = `/assets/img/leo-gallery/leo-${i + 1}.jpg`;
        leoGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_leo").nanogallery2({
        ...galleryConfig,
        items: leoGalleryItems
    });

    jQuery("#nanogallery_lulu").nanogallery2({
        ...galleryConfig,
        items: [
            { src: '/assets/img/lulu-profile.jpg', srct: '/assets/img/lulu-profile.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-1.jpg', srct: '/assets/img/lulu-gallery/lulu-1.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-2.jpg', srct: '/assets/img/lulu-gallery/lulu-2.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'},
            { src: '/assets/img/lulu-gallery/lulu-3.jpg', srct: '/assets/img/lulu-gallery/lulu-3.jpg'}
        ]
    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Image hahaha %1 of %2"
})
