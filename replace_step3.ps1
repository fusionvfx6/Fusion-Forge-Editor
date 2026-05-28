$ErrorActionPreference = "Stop"
$files = @(
    "product.json",
    "README.md",
    "HOW_TO_CONTRIBUTE.md",
    "VOID_CODEBASE_GUIDE.md",
    ".github/ISSUE_TEMPLATE/issue_template.md",
    ".vscode/tasks.json",
    "scripts/appimage/readme.md",
    "extensions/open-remote-wsl/README.md"
)

foreach ($f in $files) {
    $path = "H:\void-main\$f"
    if (Test-Path $path) {
        Write-Host "Processing $path"
        Copy-Item -Path $path -Destination "$path.bak" -Force
        $content = Get-Content -Raw -Path $path
        # case-sensitive replace
        $content = $content -creplace 'Void', 'Fusion Forge'
        $content = $content -creplace 'void-editor', 'fusion-forge'
        Set-Content -NoNewline -Path $path -Value $content
    } else {
        Write-Host "File not found: $path"
    }
}
Write-Host "Replacements completed."
