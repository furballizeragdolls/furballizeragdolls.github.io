const galleryConfig = {
    galleryMosaic : [
        { w: 1.4, h: 1.4, c: 1, r: 1 }
    ],
    galleryMosaicXS : [
        { w: 1.4, h: 1.4, c: 1, r: 1 }
    ],
    galleryMosaicSM : [
        { w: 1.4, h: 1.4, c: 1, r: 1 }
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
    // Leo
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

    // Charlie
    const charlieGalleryItems = [{ src: '/assets/img/crispy-profile.jpg', srct: '/assets/img/crispy-profile.jpg'}];
    for (const i of Array(4).keys()) {
        imagePath = `/assets/img/charlie-gallery/charlie-${i + 1}.jpg`;
        charlieGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_charlie").nanogallery2({
        ...galleryConfig,
        items: charlieGalleryItems
    });

    // LuLu
    const luluGalleryItems = [{ src: '/assets/img/lulu-profile.jpg', srct: '/assets/img/lulu-profile.jpg'}];
    for (const i of Array(13).keys()) {
        imagePath = `/assets/img/lulu-gallery/lulu-${i + 1}.jpg`;
        luluGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_lulu").nanogallery2({
        ...galleryConfig,
        items: luluGalleryItems
    });

    // Dolly
    const dollyGalleryItems = [{ src: '/assets/img/dolly-profile.jpg', srct: '/assets/img/dolly-profile.jpg'}];
    for (const i of Array(12).keys()) {
        imagePath = `/assets/img/dolly-gallery/dolly-${i + 1}.jpg`;
        dollyGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_dolly").nanogallery2({
        ...galleryConfig,
        items: dollyGalleryItems
    });

    // MoMo
    const momoGalleryItems = [{ src: '/assets/img/momo-profile.jpg', srct: '/assets/img/momo-profile.jpg'}];
    for (const i of Array(10).keys()) {
        imagePath = `/assets/img/momo-gallery/momo-${i + 1}.jpg`;
        momoGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_momo").nanogallery2({
        ...galleryConfig,
        items: momoGalleryItems
    });

    // Crispy
    const crispyGalleryItems = [{ src: '/assets/img/crispy-profile.jpg', srct: '/assets/img/crispy-profile.jpg'}];
    for (const i of Array(4).keys()) {
        imagePath = `/assets/img/crispy-gallery/crispy-${i + 1}.jpg`;
        crispyGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_crispy").nanogallery2({
        ...galleryConfig,
        items: crispyGalleryItems
    });

    // Emma
    const emmaGalleryItems = [{ src: '/assets/img/crispy-profile.jpg', srct: '/assets/img/crispy-profile.jpg'}];
    for (const i of Array(4).keys()) {
        imagePath = `/assets/img/emma-gallery/emma-${i + 1}.jpg`;
        emmaGalleryItems.push(
            { src: imagePath, srct: imagePath},
        );
    }
    jQuery("#nanogallery_emma").nanogallery2({
        ...galleryConfig,
        items: emmaGalleryItems
    });
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Image hahaha %1 of %2"
})
