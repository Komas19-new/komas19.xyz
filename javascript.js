document.addEventListener("DOMContentLoaded", function() {
  var copyAlert = document.getElementById("copyalert");

  function copyBtn() { // For blog posts 
     // Select the entire blog post
      const blogPost = document.querySelector('.post');
      console.log("Getting blog post");
      const range = document.createRange();
      range.selectNode(blogPost);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      console.log("copy");
  
      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(window.getSelection().toString());
      console.log("clipboard");
  
      // Deselect the text
      window.getSelection().removeAllRanges();
      console.log("deselect");

      // Show the copy alert
      copyAlert.style.opacity = 1;
      console.log("opacity 1");
      copyAlert.style.visibility = "visible";
      console.log("visible");
      setTimeout(function() {
        copyAlert.style.opacity = 0;
        console.log("opacity 0");
        copyAlert.style.visibility = "hidden";
        console.log("hidden");
      }, 500);
      console.log("we're done");
    }

  function responsiveTopNav() { // For the Top Bar
      var x = document.getElementById("NavTop");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  })