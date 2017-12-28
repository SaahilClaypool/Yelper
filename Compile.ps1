./pb.ps1

Set-Location './Frontend'
webpack.cmd
Set-Location ..

foreach ($file in Get-ChildItem -Path './Frontend/Output')
{
    Copy-Item -Path $file.FullName  -Destination './Backend/wwwroot'
}

# Set-Location './Backend'
# dotnet.exe run 

# Set-Location ..
