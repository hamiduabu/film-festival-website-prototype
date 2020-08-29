// Stop Youtube Video from playing after exiting modal
$('.modal').on('hidden.bs.modal', function(event) {
  const eventTarget = $(event.target).find('iframe');
  $(eventTarget).attr('src', $(eventTarget).attr('src'));
});

// Update page title for Navbar links
$('header .nav-pills li a').click(function(event) {
  console.log(event.target.innerText);
  $('title').text(event.target.innerText + ' - Brooklyn Outdoor Film Festival');
});

// Update page title for links on the page outside the Navbar
function updateTitle() {
  const navs = $('header .nav-pills li');
  Array.from(navs).forEach(nav => {
    if (nav.classList.contains('active')) {
      $('title').text(nav.innerText + ' - Brooklyn Outdoor Film Festival');
    }
  });
}

// Apply Active State on Navbar links
// For call to action Navigation links on the page outside the Navbar
function applyNavActiveState(elementId) {
  $('#home-link').removeClass('active');
  $(elementId).addClass('active');
  updateTitle();
}

function getMostRecentNewsTitles() {
  const newsTitles = $('.news-title');
  const frontpageNews = $('.frontpage-news-item');
  const recentTitles = [];
  for (let i = 0; i < frontpageNews.length; i += 1) {
    recentTitles.push(newsTitles[i].innerText);
  }
  return recentTitles;
}

(function displayFrontpageNews() {
  const mostRecentNewsTitles = getMostRecentNewsTitles();
  const frontpageNews = $('.frontpage-news-item');
  for (let i = 0; i < frontpageNews.length; i += 1) {
    frontpageNews[i].innerText = mostRecentNewsTitles[i];
  }
})();
