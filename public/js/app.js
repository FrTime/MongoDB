$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
  $(".collapsible").collapsible();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $(".saveArticle").click(() => {
    M.toast({ html: "Added to your saved articles!" });
  });
  $("#scrapeButton").click(() => {
    console.log("clicked scrape");
    getNewArticles();
  });
});

getNewArticles = () => {
  $.ajax({
    method: "GET",
    url: "/scrape"
  });
};
