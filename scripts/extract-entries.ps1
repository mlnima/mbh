$ErrorActionPreference = 'Stop'
$src = 'E:\dev\mbahmani\.reference\site\index.php'
$lines = Get-Content -LiteralPath $src -Encoding UTF8

# references-grid anchors: lines starting with spaces then <a href=... class="reference-item"
$refs = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'class="reference-item"') {
        $a = $lines[$i]
        $img = $lines[$i+1]
        $href = [regex]::Match($a, 'href="([^"]*)"').Groups[1].Value
        $title = [regex]::Match($a, 'title="([^"]*)"').Groups[1].Value
        $imgsrc = [regex]::Match($img, 'src="([^"]*)"').Groups[1].Value
        $alt = [regex]::Match($img, 'alt="([^"]*)"').Groups[1].Value
        $refs += [pscustomobject]@{ href = $href; title = $title; img = $imgsrc; alt = $alt }
    }
}

# ribbon anchors: inside media-logo-track
$rib = @()
$inTrack = $false
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'media-logo-track') { $inTrack = $true; continue }
    if ($inTrack -and $lines[$i] -match '</div>') { $inTrack = $false; continue }
    if ($inTrack -and $lines[$i] -match '<a href=') {
        $a = $lines[$i]
        $img = $lines[$i+1]
        $href = [regex]::Match($a, 'href="([^"]*)"').Groups[1].Value
        $imgsrc = [regex]::Match($img, 'src="([^"]*)"').Groups[1].Value
        $alt = [regex]::Match($img, 'alt="([^"]*)"').Groups[1].Value
        $rib += [pscustomobject]@{ href = $href; img = $imgsrc; alt = $alt }
    }
}

@{ references = $refs; ribbon = $rib } | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath 'E:\dev\mbahmani\.reference\entries.json' -Encoding UTF8
Write-Output "refs=$($refs.Count) rib=$($rib.Count)"
