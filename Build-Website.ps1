function Build-Website
{
    param
    (
        [string]$Layout = "layout.html"
    )

    $webContentFolder = "webcontent";

    $layoutFolder = "layout";

    $viewFolder = "views";

    $layoutPath = [System.IO.Path]::Combine($webContentFolder,$layoutFolder,$Layout);


    ;
    
    if( -not (Test-Path $layoutPath))
    {
        throw "Specified layout '$Layout' does not exist"
    }



    $layoutContent = Get-Content -Path $layoutPath -Raw;



    foreach($view in ( Get-ChildItem -Path ([System.IO.Path]::Combine($webContentFolder,$viewFolder))  ) )
    {
        Write-Host "Compiling $($view.Name)"

        $viewContent = Get-Content -Path $view.FullName;

        $dst = [System.IO.Path]::Combine($webContentFolder,$view.Name);

        $compiledContent = $layoutContent.Replace('{#ViewData#}', $viewContent);

        Out-File -InputObject $compiledContent -FilePath $dst -Encoding utf8;
    }
}


Build-Website
