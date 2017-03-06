(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Japanese (ja)
    plupload.addI18n({
        "Stop Upload": "アップロード停止",
        "Upload URL might be wrong or doesn't exist.": "アップロード先の URL が存在しません",
        "tb": "TB",
        "Size": "サイズ",
        "Close": "閉じる",
        "Init error.": "イニシャライズエラー",
        "Add files to the upload queue and click the start button.": "ファイルをアップロードキューに追加してスタートボタンをクリックしてください",
        "Filename": "ファイル名",
        "Image format either wrong or not supported.": "画像形式が間違っているかサポートされていません",
        "Status": "ステータス",
        "HTTP Error.": "HTTP エラー",
        "Start Upload": "アップロード開始",
        "mb": "MB",
        "kb": "KB",
        "Duplicate file error.": "重複ファイルエラー",
        "File size error.": "ファイルサイズエラー",
        "N/A": "N/A",
        "gb": "GB",
        "Error: Invalid file extension:": "エラー: ファイルの拡張子が無効です：",
        "Select files": "ファイル選択",
        "%s already present in the queue.": "%s 既にキューに存在しています",
        "File: %s": "ファイル: %s",
        "b": "B",
        "Uploaded %d/%d files": "アップロード中 %d/%d ファイル",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "アップロード可能なファイル数は %d です 余分なファイルは削除されました",
        "%d files queued": "%d ファイルが追加されました",
        "File: %s, size: %d, max file size: %d": "ファイル: %s, サイズ: %d, 最大ファイルサイズ: %d",
        "Drag files here.": "ここにファイルをドラッグ",
        "Runtime ran out of available memory.": "ランタイムが使用するメモリが不足しました",
        "File count error.": "ファイル数エラー",
        "File extension error.": "ファイル拡張子エラー",
        "Error: File too large:": "エラー: ファイルが大きすぎます:",
        "Add Files": "ファイルを追加"
    });

}));