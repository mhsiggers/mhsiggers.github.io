
function highlightbutton(n) {
  var x = document.getElementsByClassName("button");
  x[n].className = "active";
}



function Navigation(){
  document.write('<div class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="container"><div class="navbar-header">');
  document.write('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>');
  document.write('<a class="navbar-brand" href="index.html"><img src="img/knulogo.png" width="30" height="30" alt=""></a></div>');
  document.write('<div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-left">')
  document.write('<li class="button"><a href="index.html">Home</a></li>');
  document.write('<li class="button"><a href="teaching.html" class="smoothscroll">Teaching</a></li>');
  document.write('<li class="button"><a href="research.html" class="smoothscroll">Research</a></li>');
  document.write('<li class="button"><a href="about.html" class="smoothscroll">CV</a></li>');
  document.write('<li class="button"><a href="hours.html" class="smoothscroll">Office Hours</a></li>');
  document.write('<li class="button"><a href="https://kppy.siggers.work" class="smoothscroll">KPPY</a></li>');
  document.write('<li class="button"><a href="https://blog.siggers.work">Blog</a></li>')
  document.write('</ul></div></div></div> ');
}









//document.write('<li class="button"><a href="pcloud.html" class="smoothscroll">pCloud</a></li>  ');
//document.write('<li class="button"><a href="photoprism.html" class="smoothscroll">Photoprism</a></li>  ');
//document.write('<li class="button"><a href="blog.html" class="smoothscroll">Blog</a></li>  ');
//document.write('<li class="button"><a href="proxy.html" class="smoothscroll">Proxy</a></li>  ');
