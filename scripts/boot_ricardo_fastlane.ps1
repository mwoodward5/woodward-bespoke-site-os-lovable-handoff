<# boot_ricardo_fastlane.ps1
 Bulletproof boot + heartbeat watchdog for the Ricardo Fast-Lane system.
 - Ensures Chrome is running with --remote-debugging-port=9346 and a preserved profile.
 - Ensures dispatcher.mjs is running.
 - Checks tickets/_heartbeat.txt; if older than 3 minutes, restarts dispatcher.
 - Respects 08:00 - 20:00 PT work window (always runs, but dispatcher self-gates new builds).
#>
$ErrorActionPreference = 'SilentlyContinue'
$root       = 'C:\Users\Main\Documents\New project 2'
$profileDir = Join-Path $root 'chrome-profile-rocket'
$logDir     = Join-Path $root 'logs'
$heartbeat  = Join-Path $root 'tickets\_heartbeat.txt'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path $heartbeat) | Out-Null

function Ensure-Chrome {
    $hasCdp = $false
    try {
        $r = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:9346/json/version' -TimeoutSec 2
        if ($r.StatusCode -eq 200) { $hasCdp = $true }
    } catch {}
    if (-not $hasCdp) {
        $chrome = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe' -ErrorAction SilentlyContinue).'(default)'
        if (-not $chrome) { $chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe' }
        Start-Process -FilePath $chrome -ArgumentList @(
            '--remote-debugging-port=9346',
            "--user-data-dir=$profileDir",
            '--no-first-run','--no-default-browser-check',
            'https://lovable.dev/','https://mail.google.com/'
        ) | Out-Null
        Start-Sleep -Seconds 6
    }
}

function Ensure-Dispatcher {
    $running = Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
               Where-Object { $_.CommandLine -like '*dispatcher.mjs*' }
    $stale = $true
    if (Test-Path $heartbeat) {
        $age = (Get-Date) - (Get-Item $heartbeat).LastWriteTime
        if ($age.TotalMinutes -lt 3) { $stale = $false }
    }
    if (-not $running -or $stale) {
        if ($running) { $running | ForEach-Object { Stop-Process -Id $_.ProcessId -Force } }
        $log = Join-Path $logDir ("dispatcher_{0:yyyyMMdd_HHmmss}.log" -f (Get-Date))
        Start-Process -FilePath 'node.exe' `
            -ArgumentList @('dispatcher.mjs') `
            -WorkingDirectory $root `
            -RedirectStandardOutput $log `
            -RedirectStandardError  ($log + '.err') `
            -WindowStyle Hidden | Out-Null
    }
}

Ensure-Chrome
Ensure-Dispatcher
