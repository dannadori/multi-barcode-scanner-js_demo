
export const AppStatus = {
    INITIALIZING: "initializing",
    INITIALIZED : "initialized",
    RUNNING     : "running",
}

export const AIConfig = {

    SPLIT_MARGIN: 0.2,
    SPLIT_WIDTH: 300,
    SPLIT_HEIGHT: 300,
    TRANSFORMED_WIDTH: 300,
    TRANSFORMED_HEIGHT: 300,
    TRANSFORMED_MAX: 300,
    CROP_MARGIN: 20,

    SS_MODEL_PATH: '/WEB_MODEL/icnet_0300x0300_0.10/model.json',
}


export const WorkerCommand = {
    SET_OVERLAY  :  'set_overlay',
    SCAN_BARCODE : 'scan_barcode',
    PREDICT_AREA : 'predict_area',
    DRAW_MASK    : 'draw_mask',
    SCAN_BARCODES: 'scan_barcodes',
}

export const WorkerResponse = {
    NOT_PREPARED     : 'not_prepared',
    INITIALIZED      : 'initialized',
    SCANED_BARCODE   : 'scaned_barcode',
    PREDICTED_AREA   : 'predicted_area',
    DREW_MASK        : 'drew_mask',
    SCANNED_BARCODES : 'scanned_barcodes',
}

/////////////////////////////
////// ディスプレイ設定  ////
/////////////////////////////


export const qvgaConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { exact: 320 },
    height: { exact: 240 }
};

export const vgaConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { exact: 640 },
    height: { exact: 480 }
};

export const hdConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { exact: 1280 },
    height: { exact: 720 }
};

export const fullHdConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { exact: 1920 },
    height: { exact: 1080 }
};

export const fourKConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { ideal: 2500, max: 4096 },
    height: { ideal: 1600, max: 4096 }
};

export const eightKConstraints:MediaTrackConstraintSet = {
    facingMode: "environment",
    width: { ideal: 7680 },
    height: { ideal: 4320 }
};


export const DisplayConstraints = {
    QVGA:   qvgaConstraints,
    VGA:    vgaConstraints,
    HD:     hdConstraints,
    FULLHD: fullHdConstraints,
    FourK:  fourKConstraints,
    EightK: eightKConstraints,
} as const

export const DisplayConstraintOptions:{[key:string]:MediaTrackConstraintSet} = {
    "VGA"    : DisplayConstraints.VGA,
    "HD"     : DisplayConstraints.HD,
    "FULLHD" : DisplayConstraints.FULLHD
}

export const DisplayConstraint   = DisplayConstraints.FULLHD
//export const DisplayConstraint = DisplayConstraints.HD
//export const DisplayConstraint = DisplayConstraints.VGA
