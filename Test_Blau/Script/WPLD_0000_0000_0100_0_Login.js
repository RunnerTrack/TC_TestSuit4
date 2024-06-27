function Login() {

  let url = "http://win2016-vss:2980/MiFID/";
  Browsers.Item(btEdge).Run();
  Browsers.Item(btEdge).Navigate(url);
  
  Sys.Browser().BrowserWindow(0).Maximize();
}