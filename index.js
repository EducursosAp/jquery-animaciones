$(document).ready(() => {
  const generateBtn = $("#generateBtn");

  generateBtn.on("click", function () {
    generateBtn.toggleClass("esp");
  });

  const comments = $(".comment"); //Array de comentarios en forma de elementos

  comments.each(function (index) {
    const button = $(comments[index]).find("button");


    button.on("click", function () {
      const parent = $(this).closest(".comment");
      $(parent).remove();
     
      
    });
  });
});
