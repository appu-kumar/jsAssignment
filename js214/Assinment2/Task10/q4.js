
function findPaths(filePaths){
      return filePaths.filter(function(path){
          let ans=path.split(".");
          return (ans[1]==="jpg" || ans[1]=="png")?true:false;           
      })
}
const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];

  
  // we have to find the those paths which are containing the .png or .jpg

  console.log(findPaths(filePaths));

