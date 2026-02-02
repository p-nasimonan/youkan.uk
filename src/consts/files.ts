export const sharedFiles = [
    {
        id: '740b82cf-000f-4c56-8e35-2472160b1b69',
        title: 'Mac EXIF Extractor',
        description: 'Folder内の画像の撮影日時(JST)を抽出してCSVに出力するMac用スクリプト(.command)です。',
        date: '2026-01-30',
        // Path relative to public directory
        filePath: '/shared/photo_date_extractor.zip',
        isImage: false
    }
];

export function getFileById(id: string) {
    return sharedFiles.find(file => file.id === id);
}
