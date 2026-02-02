# スクリプトがあるディレクトリに移動
cd "$(dirname "$0")"

OUTPUT="photo_dates_jst.csv"
echo "ファイル名,撮影日時(JST)" > "$OUTPUT"

for ext in jpg jpeg png heic JPG JPEG PNG HEIC; do
    for file in *.$ext(N); do
        [[ -e "$file" ]] || continue
        
        filename=$(basename "$file")
        # mdlsから生データを取得
        raw_date=$(mdls -name kMDItemContentCreationDate -raw "$file" 2>/dev/null)
        
        if [[ "$raw_date" == "(null)" || -z "$raw_date" ]]; then
            jst_date="取得不可"
        else
            # raw_date は "2024-04-16 02:57:23 +0000" の形式
            # これをMacのdateコマンドで日本時間に変換
            jst_date=$(date -j -f "%Y-%m-%d %H:%M:%S %z" "$raw_date" "+%Y/%m/%d %H:%M:%S" 2>/dev/null)
        fi
        
        echo "\"$filename\",\"$jst_date\"" >> "$OUTPUT"
    done
done
